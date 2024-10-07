import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Awesome Developer Marketing</title>
                <meta name="description" content="A curated list of awesome resources for marketing developer tools" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${inter.variable} font-sans`}>
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;