import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

async function getBalance(publicKeyString: string) {
  // メインネットの接続を確立
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
  
  // 公開鍵を作成
  const publicKey = new PublicKey(publicKeyString);

  // 残高を取得 (単位はLamports、1 SOL = 1,000,000,000 Lamports)
  const balance = await connection.getBalance(publicKey);

  // SOLに変換して表示
  console.log(`Balance: ${balance / 1e9} SOL`);
}

// 取得したいアカウントの公開鍵
const mainAccountPublicKey = '41vW5dt2c2aveUfznrLbP7ZUYTGq6Hm8Ud2V9VT7YnnR';
getBalance(mainAccountPublicKey)
