// import Web3 from 'web3'
import * as Types from './types.js';
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,

} from './constants.js';


import Erc20Abi from './abi/erc20.json';


import FlashLenderAbi from './abi/flashLender.json'
import FlashBorrowerAbi from './abi/flashBorrower.json'
import FlashMinterAbi from './abi/flashMinter.json'
export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
        options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    console.log("this web3 = ", this.web3);
 
    this.erc20 = new this.web3.eth.Contract(Erc20Abi);

   
    this.flashLender = new this.web3.eth.Contract(FlashLenderAbi);
    this.flashBorrower = new this.web3.eth.Contract(FlashBorrowerAbi);
    this.flashMinter = new this.web3.eth.Contract(FlashMinterAbi);



    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider);
      if (address) contract.options.address = address;
      else console.error('Contract address not found in network', networkId);
    }

  
    
    setProvider(this.flashLender, contractAddresses.flashLender[networkId]);
    setProvider(this.flashBorrower, contractAddresses.flashBorrower[networkId]);
    setProvider(this.flashMinter, contractAddresses.flashMinter[networkId]);

   

   
  }

  setDefaultAccount(account) {
   
  }
}
