import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

async function getStakeAccountBalance(stakeAccountPublicKey: string) {
  // Solanaネットワーク（メインネット）に接続
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

  // ステークアカウントの公開鍵を作成
  const publicKey = new PublicKey(stakeAccountPublicKey);

  // ステークアカウント情報を取得
  const stakeAccountInfo = await connection.getParsedAccountInfo(publicKey);
  console.log(stakeAccountInfo)
}

// 取得したいステークアカウントの公開鍵
const stakeAccountPublicKey = '4ERGHXcNNtP8pympdhZ93ReC4kk2raTYu9PfN6P5ShFZ';
getStakeAccountBalance(stakeAccountPublicKey);
