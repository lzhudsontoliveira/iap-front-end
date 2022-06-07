import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto:ital,wght@0,400;0,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </Html>
    )
  }
}