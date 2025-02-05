import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Preload Critical Fonts */}
        <link
          rel="preload"
          href="/fonts/1906_french_news_n-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/bourbon_base-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/absinthe-aged-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/absinthe-full-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-image/stars-left.webp"
          type="image/jpeg"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-image/logo-w-background.webp"
          type="image/jpeg"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-image/stars-right.webp"
          type="image/jpeg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
