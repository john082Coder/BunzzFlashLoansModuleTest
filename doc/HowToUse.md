## Preparation before deployment
1. You should prepare ERC20 token for lending.

## Get started(Operation)


1. Deploy flashLender contract. You have to pass supportedTokens and fee as moudle parameters. You have to input your prepared ERC20 token address as supportedTokens_.
2. Deploy flashBorrower contract. You have to pass flashLender contract address to lender_ parameter.
3. Deploy flashMinter contract.
4. Deploy another flashBorrower contract. You have to pass flashMinter contract address to lender_ parameter.
5. You can call `flashBorrow` function of flashBorrower contract for lending tokens.




