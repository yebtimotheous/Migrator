// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenMigration is Pausable, Ownable {
    IERC20 public oldToken;
    NewToken public newToken;
    uint256 public conversionRate;

    event Migrate(
        address indexed user,
        uint256 oldTokenAmount,
        uint256 newTokenAmount
    );

    constructor(IERC20 _oldToken, uint256 _conversionRate) {
        oldToken = _oldToken;
        conversionRate = _conversionRate;
        newToken = new NewToken();
    }

    function migrate(uint256 _oldTokenAmount) external whenNotPaused {
        uint256 newTokenAmount = _oldTokenAmount * conversionRate;
        require(
            oldToken.transferFrom(msg.sender, address(this), _oldTokenAmount),
            "Transfer of old tokens failed"
        );
        newToken.mint(msg.sender, newTokenAmount);
        emit Migrate(msg.sender, _oldTokenAmount, newTokenAmount);
    }

    function pauseMigration() external onlyOwner {
        _pause();
    }

    function resumeMigration() external onlyOwner {
        _unpause();
    }
}

contract NewToken is ERC20, Ownable {
    constructor() ERC20("NewToken", "NEW") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
