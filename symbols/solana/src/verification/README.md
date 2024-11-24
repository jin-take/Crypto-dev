# SOL Balance Verifications

## Main Account Balance
src code: `getMainAccountBalance.ts`

result:
```shell: balance
Balance: 843.225380581 SOL
```
explorer:
![エクスプローラーで見た値](./images/image20241007_154620.png)

## Stake Account Balance

### active stake account
src code: `getActiveStakeAccountBalance.ts`

result: 
```shell: balance
340.522277772
```
explorer:
![エクスプローラーで見た値](./images/imega20241007_155430.png)

### inactive stake account
src code: `getInactiveStakeAccountBalance.ts`

result:
```shell: balance
{ 
    context: { 
        apiVersion: '1.18.23', 
        slot: 294191661 
    }, 
    value: null 
}
```
→ value is null: all amount is undelegated and balance is null (this is collect)


```
SOL Balance 302.59 SOL ($45,101.35)
Type delegated
State active
Delegated stake 302.45 SOL ($45,081.51)
Active Stake 302.45 SOL ($45,081.51)
Inactive Stake 0.1308 SOL ($19.5)
Total Reward 2.4612 SOL ($366.85)
```

```
SOL Balance: 302.592144943 SOL
Type: undefined
State: active
Delegated Stake: 302.458987477 SOL
Active Stake: 302.458987477 SOL
Inactive Stake: 0 SOL
Total Reward: 0.013671072 SOL
Rent Exempt Reserve: 0.00228288 SOL
```

302.592144943 - 302.45898747 = 0.133157473



### 最初にデリゲートした数量
- address: eVC8jghBNzw3KBH7DHDBemEbScS9ZvG44vKNb3yhoHW
- initial delegate amount: 300 SOL
- currenct balance amount: 302.592144943 SOL
- currenct delegate amount: 302.458987477 SOL

- (current balance amount) - (initial delegate amount)
    - 302.592144943 - 300 = 2.592144943
- (currenct delegate amount) - (initial delegate amount) = (probably, total reward amount from SOL chain) 
    - 302.458987477 - 300 = 2.458987477 
- (current balance amount) - (currenct delegate amount) 
    - 302.592144943 - 302.45898747 = 0.133157473

### 考えうる数量
- MEV Rewards(Airdrop):
    - total reward amount: 0.03078428 SOL
    - above fee amount: 0.0001046 SOL
- Rewards from SOL chain:
    - total reward amount: 2.461270357 SOL
- Rent Exempt Reserve:
    - 0.00228228 SOL
