const Web3 = require("web3");
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const contract_utils = require('./Utils/contract-utils');

var myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

var web3 = null;
try {
    web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.INFURA_WS_NETWORK));
    console.log("Connection Successfull!");
}
catch (e) {
    console.log("Connection Error!", e);
}

if (web3) {
    try {
        (async () => {
            var loaded_contract = await contract_utils.loadContract("SecretPasswd", web3.currentProvider);
            const storage = await web3.eth.getStorageAt(loaded_contract.address, 1);
            console.log("password: ", hex_to_ascii(storage));
        })();
    }
    catch (e) {
        console.log("contract could not be loaded!", e);
    }
}

const hex_to_ascii = _hex => {
    const hex = _hex.toString();
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

