import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class RootDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta name='keywords' content='Nextjs CSA Boilerplate' />
          <meta name='description' content='Minimalize Modern Next Boilerplate 2021' />
          <link rel='stylesheet' href='public/static/css/style.css' type='text/css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
