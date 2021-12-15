// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.6.10;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../lib/AddressStorage.sol";

/**
 * @title AddressRepository
 * @notice Stores addresses of deployed contracts
 */
contract AddressRepository is Ownable, AddressStorage {
    bytes32 private constant VAULT_SERVICE = "VAULT_SERVICE";

    bytes32 private constant H_TOKEN = "H_TOKEN";

    /**
     * @dev returns the address of the LendingPool proxy
     * @return the lending pool proxy address
     **/
    function getVaultService() public view returns (address) {
        return getAddress(VAULT_SERVICE);
    }

    function setVaultService(address _address) public onlyOwner {
        _setAddress(VAULT_SERVICE, _address);
    }

    function getGToken() public view returns (address) {
        return getAddress(H_TOKEN);
    }

    function setGToken(address _address) public onlyOwner {
        _setAddress(H_TOKEN, _address);
    }
}
