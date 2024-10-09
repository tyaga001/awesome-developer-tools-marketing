import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from 'next/document'
import { JSX } from 'react'

class MyDocument extends Document<DocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="A curated list of awesome resources for marketing developer tools" />
                    <link rel="icon" href="/favicon.ico" />
                    <script
                        defer
                        src="https://cloud.umami.is/script.js"
                        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument