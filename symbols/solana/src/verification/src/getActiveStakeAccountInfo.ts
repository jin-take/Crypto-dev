import { Connection, PublicKey, clusterApiUrl, ParsedAccountData } from '@solana/web3.js';

async function getStakeAccountDetails(stakeAccountPublicKey: string) {
  // Solanaネットワークに接続
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');

  // ステークアカウントの公開鍵を作成
  const publicKey = new PublicKey(stakeAccountPublicKey);

  // ステークアカウント情報を取得
  const stakeAccountInfo = await connection.getParsedAccountInfo(publicKey);

  if (stakeAccountInfo.value && stakeAccountInfo.value.data) {
    // 型ガード: データがParsedAccountData型か確認
    if ('parsed' in stakeAccountInfo.value.data) {
      const parsedInfo = (stakeAccountInfo.value.data as ParsedAccountData).parsed.info;

      // SOLバランスを取得
      const lamports = stakeAccountInfo.value.lamports;
      const solBalance = lamports / 1e9;

      // ステークタイプと状態を取得
      const stakeType = parsedInfo.meta ? parsedInfo.meta.type : 'Unknown';
      const stakeState = parsedInfo.stake.delegation && parsedInfo.stake.delegation.deactivationEpoch === '18446744073709551615' ? 'active' : 'inactive';

      // 委任されたステークとアクティブ・インアクティブステークを取得
      const delegatedStake = parsedInfo.stake.delegation.stake / 1e9;
      const activeStake = stakeState === 'active' ? delegatedStake : 0;
      const inactiveStake = stakeState === 'inactive' ? delegatedStake : 0;

      // 合計報酬の取得
      const totalRewards = parsedInfo.stake.creditsObserved / 1e9;

      // rentExemptReserveの取得
      const rentExemptReserve = parsedInfo.meta.rentExemptReserve / 1e9;

      // 結果の表示
      console.log(`SOL Balance: ${solBalance} SOL`);
      console.log(`Type: ${stakeType}`);
      console.log(`State: ${stakeState}`);
      console.log(`Delegated Stake: ${delegatedStake} SOL`);
      console.log(`Active Stake: ${activeStake} SOL`);
      console.log(`Inactive Stake: ${inactiveStake} SOL`);
      console.log(`Total Reward: ${totalRewards} SOL`);
      console.log(`Rent Exempt Reserve: ${rentExemptReserve} SOL`);
    } else {
      console.error('The account data is not parsed.');
    }
  } else {
    console.error('Invalid stake account or unable to fetch details.');
  }
}

// 対象のステークアカウントの公開鍵
const stakeAccountPublicKey = 'eVC8jghBNzw3KBH7DHDBemEbScS9ZvG44vKNb3yhoHW';
getStakeAccountDetails(stakeAccountPublicKey);
