https://medium.com/coinmonks/a-quick-guide-to-hack-private-variables-in-solidity-b45d5acb89c0

Wanted to demo the fact that private variable can be read from external program.

Procedure for contract deployment
npm install --save dotenv

npm install --save dotenv-expand

npm install --save @truffle/hdwallet-provider

npm install --save @truffle/contract

check variables in .env if still up to date with infura (websocket endpoint url and project_id)
add mnemonic (metamask rinkeby testnet) my account for testing: 0xA3b13748cC7bDE18b2A0A6ce77D48c7c8703d20e

for deployment:

truffle compile

truffle migrate --reset --network rinkeby 

Once successfully deployed:

node ./src/index.js

the contract password shall be printed out to the console
