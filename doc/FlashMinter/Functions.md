# WRITE(main)

## approve
Sets amount as the allowance of spender over the caller's tokens. Returns a boolean value indicating whether the operation succeeded.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|spender|address|Spender address||N/A|
|amount|uint256|Approval amount||N/A|


## transferOwnerShip
Transfers ownership of the contract to a new account (newOwner). Can only be called by the current owner.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newOwner|address|New owner address||N/A|


## flashLoan
Loan amount tokens to receiver, and takes it back plus a {flashFee} after the ERC-3156 callback.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|receiver|address|The address of the contract which is receiving the tokens, needs to implement onFlashLoan interface||N/A|
|token|address|The loan currency. Must match the address of this contract.||N/A|
|amount|uint256|The amount of tokens lent.||N/A|
|data|bytes|A data parameter to be passed on to the receiver for any custom use.||N/A|

## renounceOwnership
Leaves the contract without owner. It will not be possible to call onlyOwner functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

No arguments

## transferFrom
Moves amount tokens from sender to recipient using the allowance mechanism. amount is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|sender|address|Sender address||N/A|
|recipient|address|Recipient address||N/A|
|amount|uint256|Transfer amount||N/A|

## increaseAllowance
Atomically increases the allowance granted to spender by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|spender|address|Spender address||N/A|
|addedValue|uint256|Increased amount||N/A|

## transfer
Moves amount tokens from the caller's account to recipient. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|recipient|address|Transfer recipient address||N/A|
|amount|uint256|Transfer amount||N/A|

## decreaseAllowance
Atomically decreases the allowance granted to spender by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|spender|address|Spender address||N/A|
|subtracted|uint256|Decreased amount||N/A|



# READ(main)

## balanceOf
Returns the amount of tokens owned by account.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|account|address|Target account address||N/A|

## CALLBACK_SUCCESS
keccak256("ERC3156FlashBorrower.onFlashLoan")

No arguments

## totalSupply
Returns the amount of tokens in existence.

No arguments


## flashFee
The fee to be charged for a given loan. Returns the amount of token to be charged for the loan, on top of the returned principal.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|token|address|The loan currency. Must match the address of this contract.||N/A|
|amount|uint256|The amount of tokens lent.||N/A|

## maxFlashLoan
The amount of currency available to be lent. Returns the amount of token that can be borrowed.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|token|address|The loan currency.||N/A|

## name
Returns the name of the token.

No arguments

## owner
Returns the address of the current owner.

No arguments

## allowance
Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|owner|address|Owner address||N/A|
|spender|address|Spender address||N/A|

## decimals
Returns the decimals places of the token.

No arguments

## symbol
Returns the symbol of the token.

No arguments

## fee
Flash loan fee amount. (1 == 0.0001 %)

No arguments




