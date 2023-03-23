import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const getErc20Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.erc20;
}

export const getUniswapV2FactoryContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.uniswapV2Factory;
}

export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}

export const getFlashLenderContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.flashLender;
}

export const getFlashBorrowerContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.flashBorrower;
}

export const getFlashMinterContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.flashMinter;
}

export const getAllowance = async (
  erc20Contract,
  escrowContract,
  account
) => {
  try {
    const allowance = await erc20Contract.methods
      .allowance(account, escrowContract.options.address)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}

export const getDecimal = async (
  erc20Contract,
) => {
  try {
    const decimal = await erc20Contract.methods
      .decimals()
      .call()
      return new BigNumber(decimal);
  } catch (e) {
    return new BigNumber(0);
  }
}








export const flashBorrow = async (flashBorrowerContract, token, amount, account) => {
  return flashBorrowerContract.methods.flashBorrow(token, new BigNumber(amount).times(new BigNumber(10).pow(9)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const flashBorrowAndReenter = async (flashBorrowerContract, token, amount, account) => {
  return flashBorrowerContract.methods.flashBorrowAndReenter(token, new BigNumber(amount).times(new BigNumber(10).pow(9)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const flashBorrowAndSteal = async (flashBorrowerContract, token, amount, account) => {
  return flashBorrowerContract.methods.flashBorrowAndSteal(token, new BigNumber(amount).times(new BigNumber(10).pow(9)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const approveRepayment = async (flashBorrowerContract, token, amount, account) => {
  return flashBorrowerContract.methods.approveRepayment(token, new BigNumber(amount).times(new BigNumber(10).pow(9)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}




