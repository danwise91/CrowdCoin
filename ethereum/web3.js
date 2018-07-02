import Web3 from 'web3';

let web3;
//typeof checks to see if a variable is defined
//checks to see if window is on the server or the browser
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	//we are in the browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
}else {
	//we are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
  	'https://rinkeby.infura.io/eFutPeyqvJnlvnSEUctr'
	);
   web3 = new Web3(provider);
}

export default web3;