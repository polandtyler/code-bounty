import Web3 from 'web3'

let _web3;
let _web3Provider;

export const web3 = (() => {
  if (typeof _web3 !== 'undefined') {
    _web3Provider = _web3.currentProvider;
  } else {
    _web3 = new Web3(_web3Provider);
    _web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
  }

  return _web3;
})();
