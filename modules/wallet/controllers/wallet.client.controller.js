angular
  .module('lwWallet')
  .controller('lwWalletCtrl', walletController);

walletController.$inject = [];
function walletController() {
  console.log('Hello: wallet controller');
}
