import { Html, Head, Main, NextScript } from 'next/document'
import { almarai } from '@/lib/fonts'

export default function Document() {
  return (
    <Html lang="en" className={almarai.variable}>
     <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
