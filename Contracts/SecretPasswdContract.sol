// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract SecretPasswd {
    address public _owner;
    string private _secretPassword;

    constructor(string memory secretPassword) {
        _owner = msg.sender;
        _secretPassword = secretPassword;
    }

    function getSecretPassword() public view returns (string memory) {
        require(_owner == msg.sender, "You are not the owner!");
        return _secretPassword;
    }
}
