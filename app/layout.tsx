'use client';

import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();
const wagmiConfig = createConfig({
    chains: [base, baseSepolia],
    transports: {
        [base.id]: http(),
        [baseSepolia.id]: http()
    }
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <html lang="en">
                    <body className={inter.className}>{children}</body>
                </html>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
