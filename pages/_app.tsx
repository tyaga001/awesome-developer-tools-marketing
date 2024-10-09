import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${inter.variable} font-sans`}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;