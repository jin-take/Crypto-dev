import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

async function getStakeAccountBalance(stakeAccountPublicKey: string) {
  // Solanaネットワーク（メインネット）に接続
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

  // ステークアカウントの公開鍵を作成
  const publicKey = new PublicKey(stakeAccountPublicKey);

  // ステークアカウント情報を取得
  const stakeAccountInfo = await connection.getParsedAccountInfo(publicKey);
  console.log(Number(stakeAccountInfo.value?.lamports)/1e9)
}

// 取得したいステークアカウントの公開鍵
const stakeAccountPublicKey = '7q2A9TCxwiNC7nq3s7qrRww4CL9RkaUwyv9diMBoUrzC';
getStakeAccountBalance(stakeAccountPublicKey);
