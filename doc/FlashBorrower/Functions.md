# WRITE(main)

## transferOwnerShip
Transfers ownership of the contract to a new account (newOwner). Can only be called by the current owner.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|newOwner|address|New owner address||N/A|


## flashBorrow
Initiate a flash loan.

|Name|Type|Description|Example|Default|
|--- |---|---|---|---|
|token|address|Token to flash loan||N/A|
|amount|uint256|Token amount to flash loan||N/A|

## flashBorrowAndReenter
Use this to pack arbitrary data to {onFlashLoan}.

|token|address|Token to flash loan||N/A|
|amount|uint256|Token amount to flash loan||N/A|

## onFlashLoan
ERC-3156 Flash loan callback

|initiator|address|Flash loan initiator address ||N/A|
|token|address|Token to flash loan||N/A|
|amount|uint256|Token amount to flash loan||N/A|
|fee|uint256|Flash loan fee||N/A|
|data|bytes|Flash loan data||N/A|

## approveRepayment
Approve repayment.

|token|address|Token to flash loan||N/A|
|amount|uint256|Token amount to flash loan||N/A|

## flashBorrowAndSteal
Use this to pack arbitrary data to {onFlashLoan}.

|token|address|Token to flash loan||N/A|
|amount|uint256|Token amount to flash loan||N/A|

## renounceOwnership
Leaves the contract without owner. It will not be possible to call onlyOwner functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.

No arguments




# READ(main)

## flashAmount
Flash loan amount.

No arguments

## flashBalance
Flash loan balance.

No arguments

## flashFee
Flash loan fee amount. (1 == 0.0001 %)

No arguments

## flashInitiator
Flash loan initiator.

No arguments

## flashToken
Flash loan token

No arguments

## owner
Returns the address of the current owner.

No arguments





