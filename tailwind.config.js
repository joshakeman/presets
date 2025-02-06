/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "1/1": "100%",
      },
      boxShadow: {
        "cool-shadow":
          "0px 8px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.2)",
        "cool-shadow-tinted":
          "0px 10px 20px rgba(0, 0, 0, 0.15), 0px 6px 12px rgba(0, 0, 255, 0.05)", // Blue tint
      },
      colors: {
        cream: "rgba(253, 246, 227)",
        creamFaded: "rgba(253, 246, 227, 0.6)",
        backgroundBlue: "#E1DEFB",
        backgroundBlueFaded: "rgba(225, 222, 251, 0.9)",
        darkCard: "rgba(38,38,38,1.0)",
      },
      backgroundImage: {
        victorianPattern: "url('/images/victorian-bg-stronger.webp')",
        victorianParchment: "url('/images/vintage-parchment.webp')",
      },
      borderRadius: {
        "4xl": "2rem", // 32px
        "5xl": "3rem", // 48px
      },
    },
  },
  images: {
    domains: ["https://photo-presets.netlify.app/"], // Ensure images are allowed from your domain
  },
  headers: async () => [
    {
      source: "/images/slider-handle.webp",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
  plugins: [],
};
