// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenMock is ERC20 {
    constructor() public ERC20("Mock", "MCK") {
        _mint(msg.sender, 10000000000000000000000);
    }
}
