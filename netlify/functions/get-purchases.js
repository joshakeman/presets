require("dotenv").config();
// netlify/functions/get-purchases.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const user = event.headers["x-user-email"];
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }

  try {
    // Find customer by email
    const customers = await stripe.customers.list({ email: user });
    const customer = customers.data[0];
    if (!customer) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "No Stripe customer found" }),
      };
    }

    // Fetch their sessions
    const sessions = await stripe.checkout.sessions.list({
      customer: customer.id,
      expand: ["data.line_items.data.price.product"],
    });

    const downloadUrls = [];

    for (const session of sessions.data) {
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        {
          expand: ["data.price.product"],
        }
      );

      lineItems.data.forEach((item) => {
        const url = item.price.product.metadata.download_url;
        if (url && !downloadUrls.includes(url)) {
          downloadUrls.push(url);
        }
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ downloads: downloadUrls }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    };
  }
};
