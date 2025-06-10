import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification Tag */}
        <meta name="google-site-verification" content="sYF7FREEVkxPWs3X8rmqC5nQ9UJsgHaWN43VuyOWYQc" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
