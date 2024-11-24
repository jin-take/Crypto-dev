import { connectWebSocketClient } from '@stacks/blockchain-api-client';

async function healthCheck() {
    // for testnet, replace with wss://api.testnet.hiro.so/
    const client = await connectWebSocketClient('wss://api.mainnet.hiro.so/');

    const sub = await client.subscribeAddressTransactions('ST3GQB6WGCWKDNFNPSQRV8DY93JN06XPZ2ZE9EVMA', event =>
    console.log(event)
    );

    await sub.unsubscribe();
}

healthCheck()
