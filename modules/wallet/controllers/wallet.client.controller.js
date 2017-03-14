angular
  .module('lwWallet')
  .config(configureLocalStorage)
  .controller('lwWalletCtrl', walletController);

// Setup a prefix to be used inside the local storage cache
configureLocalStorage.$inject = ['localStorageServiceProvider'];
function configureLocalStorage(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('lw');
}

// Use local storage
walletController.$inject = ['LocalStorageModule'];
function walletController(LocalStorageModule) {
  console.log('Hello: wallet controller');

  // Locals
  var vm = this;

}
