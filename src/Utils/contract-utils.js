const contract = require('@truffle/contract');
const fs = require('fs');

module.exports = {
    loadContract: async function (name, provider) {
        const data = await fs.promises.readFile(`./src/contracts/${name}.json`, 'utf8');
        var jsonData = JSON.parse(data);
        const _contract = contract(jsonData);
        _contract.setProvider(provider);

        const deployedContract = await _contract.deployed();
        return deployedContract;
    }
}

