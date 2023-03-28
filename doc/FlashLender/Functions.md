# WRITE(main)

## transferOwnerShip
Transfers ownership of the contract to a new account (newOwner). Can only be called by the current owner.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newOwner|address|New owner address||N/A|


## flashLoan
Loan amount tokens to receiver, and takes it back plus a {flashFee} after the callback.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|receiver|address|The address of the contract which is receiving the tokens, needs to implement onFlashLoan interface||N/A|
|token|address|The address of token which the borrower is going to loan||N/A|
|amount|uint256|The amount of tokens lent.||N/A|
|data|bytes|The data parameter to be passed on to the receiver for any custom use.||N/A|

## renounceOwnership
Leaves the contract without owner. It will not be possible to call onlyOwner functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

No arguments



# READ(main)

## supportedTokens
Returns the bool variable if the address is supported token or not.(mapping(address => bool))

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|address|address|The address of the token which you are going to check||N/A|

## flashFee
The fee to be charged for a given loan. Returns the amount of token to be charged for the loan, on top of the returned principal.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|token|address|The loan currency.||N/A|
|amount|uint256|The amount of tokens lent.||N/A|

## maxFlashLoan
The amount of currency available to be lent. Returns the amount of token that can be borrowed.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|token|address|The loan currency.||N/A|


## owner
Returns the address of the current owner.

## fee
Flash loan fee amount. (1 == 0.0001 %)




