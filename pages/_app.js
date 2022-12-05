import { SessionProvider } from 'next-auth/react';
import { configureChains, createClient, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import './index.css';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: true,
});

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <SessionProvider session={pageProps.session} refetchInterval={0}>
                <Component {...pageProps} />
            </SessionProvider>
        </WagmiConfig>
    );
}

export default MyApp;
