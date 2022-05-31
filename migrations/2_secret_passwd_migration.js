const SecretPasswdContract = artifacts.require("SecretPasswd");

module.exports = function (deployer) {
    const pwd = "Not really secret !";
    deployer.deploy(SecretPasswdContract, pwd);
}; 