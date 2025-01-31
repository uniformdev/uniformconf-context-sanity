import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/favicon/favicon.png" rel="icon" />
        <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" />
        <link
          href="/favicon/apple-touch-icon-72x72.png"
          rel="apple-touch-icon"
          sizes="72x72"
        />
        <link
          href="/favicon/apple-touch-icon-114x114.png"
          rel="apple-touch-icon"
          sizes="114x114"
        />
        <link href="/favicon/icon-192x192.png" rel="icon" sizes="192x192" />
        <meta
          name="description"
          content="UniformConf, a Uniform content demo site"
        />
      </Head>
      <body className="leading-normal tracking-normal text-white gradient">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
