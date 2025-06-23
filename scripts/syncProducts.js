// scripts/syncProducts.js for Supabase (safe, reads from DB before Stripe)
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const { products } = require("../data/products.js");

// Check for duplicate SKUs in the input
const seenSkus = new Set();
for (const product of products) {
  if (!product.sku) {
    throw new Error(`Missing SKU for product: ${product.name}`);
  }
  if (seenSkus.has(product.sku)) {
    throw new Error(`Duplicate SKU found: ${product.sku}`);
  }
  seenSkus.add(product.sku);
}

(async () => {
  for (let product of products) {
    // Step 1: Check if product already exists in Supabase
    const { data: existing, error: fetchError } = await supabase
      .from("products")
      .select("stripe_product_id, stripe_price_id")
      .eq("sku", product.sku)
      .maybeSingle();

    if (fetchError) {
      console.error(
        `Error checking existing record for ${product.sku}:`,
        fetchError
      );
      continue;
    }

    const alreadySynced =
      existing?.stripe_product_id &&
      existing.stripe_product_id !== "null" &&
      existing.stripe_product_id !== "" &&
      existing?.stripe_price_id &&
      existing.stripe_price_id !== "null" &&
      existing.stripe_price_id !== "";

    // Step 2: Upsert base product record (no Stripe info yet)
    const { error: dbInsertError } = await supabase
      .from("products")
      .upsert(product, { onConflict: ["sku"] });

    if (dbInsertError) {
      console.error(`Failed DB insert for ${product.sku}:`, dbInsertError);
      continue;
    }

    // Step 3: If not already synced, create Stripe product + price
    if (!alreadySynced) {
      try {
        const stripeProduct = await stripe.products.create({
          name: product.name,
          description: product.description,
        });

        const stripePrice = await stripe.prices.create({
          product: stripeProduct.id,
          unit_amount: product.price,
          currency: "usd",
        });

        if (stripeProduct?.id && stripePrice?.id) {
          const { error: updateError } = await supabase
            .from("products")
            .update({
              stripe_product_id: stripeProduct.id,
              stripe_price_id: stripePrice.id,
            })
            .eq("sku", product.sku);

          if (updateError) {
            console.error(
              `Failed to update Stripe IDs for ${product.sku}:`,
              updateError
            );
          } else {
            console.log(
              `Synced ${product.sku} to Stripe and updated Supabase.`
            );
          }
        } else {
          console.error(
            `Stripe product or price missing ID for ${product.sku}`
          );
        }
      } catch (err) {
        console.error(`Stripe sync failed for ${product.sku}:`, err);
      }
    } else {
      console.log(`Product already synced: ${product.sku}`);
    }
  }

  console.log("✅ Sync complete.");
})();
