## About

A flash loan is a smart contract transaction in which a lender smart contract lends assets to a borrower smart contract with the condition that the assets are returned, plus an optional fee, before the end of the transaction.

ERC-3156: Flash Loans specifies interfaces for lenders to accept flash loan requests, and for borrowers to take temporary control of the transaction within the lender execution.

The process for the safe execution of flash loans is also specified.


## Features

Flash loans have 3 submodules, FlashLender, FlashBorrower, FlashMinter 
A lender MUST implement the IERC3156FlashLender interface.
A receiver of flash loans MUST implement the IERC3156FlashBorrower interface.

FlashLender is a contract that allows flash lending. Submodule of ERC-3156: Flash Loans module.
FlashMinter is a contract that allows flash minting. Submodule of ERC-3156: Flash Loans module.
FlashBorrower is an extension of {ERC20} that allows flash borrowing. Submodule of ERC-3156: Flash Loans module.

## Use case
Flash loans allow smart contracts to lend an amount of tokens without a requirement for collateral, with the condition that they must be returned within the same transaction.

Early adopters of the flash loan pattern have produced different interfaces and different use patterns. The diversification is expected to intensify, and with it the technical debt required to integrate with diverse flash lending patterns.

Some of the high level differences in the approaches across the protocols include:

    - Repayment approaches at the end of the transaction, where some pull the principal plus the fee from the loan receiver, and others where the loan receiver needs to manually return the principal and the fee to the lender.
    - Some lenders offer the ability to repay the loan using a token that is different to what was originally borrowed, which can reduce the overall complexity of the flash transaction and gas fees.
    - Some lenders offer a single entry point into the protocol regardless of whether you’re buying, selling, depositing or chaining them together as a flash loan, whereas other protocols offer discrete entry points.
    - Some lenders allow to flash mint any amount of their native token without charging a fee, effectively allowing flash loans bounded by computational constraints instead of asset ownership constraints.

## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzFlashLoansModuleTest
- simple dapp URL
    https://bunzz-flash-loans-module-test.vercel.app/


---
## Review report
- [JCoder's report](https://docs.google.com/document/d/1GUuTmK7WaE2L4SvHPYCxv2rRqRrtTiS-ja37yd6KBr8/edit?usp=sharing)