'use client';

import { useConnect, useAccount } from 'wagmi';
import { injected } from 'wagmi/connectors';

export default function Home() {
    const { connect } = useConnect();
    const { isConnected } = useAccount();

    return (
        <div>
            {isConnected ? (
                <p>Wallet Connected</p>
            ) : (
                <button onClick={() => connect({ connector: injected() })}>
                    Connect Wallet
                </button>
            )}
        </div>
    );
}
