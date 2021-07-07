import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preload" href="/assets/fonts/Montserrat/montserrat-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/assets/fonts/Montserrat/montserrat-500.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/assets/fonts/Montserrat/montserrat-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/assets/fonts/Montserrat/montserrat-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/assets/fonts/Montserrat/montserrat-800.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/assets/fonts/Raleway/raleway-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/assets/fonts/Mulish/mulish-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
