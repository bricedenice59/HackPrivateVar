Procedure for contract deployment
npm install --save dotenv
npm install --save @truffle/hdwallet-provider

check variables in .env if still up to date with infurate (websocket endpoint url and project_id)
add mnemonic (for my testings, metamask rinkeby testnet) my account 0xA3b13748cC7bDE18b2A0A6ce77D48c7c8703d20e

for deployment:
truffle compile
truffle migrate --reset --network rinkeby 