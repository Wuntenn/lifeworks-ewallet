angular
  .module('lwWallet')
  .config(walletRoute);

walletRoute.$inject = ['$stateProvider'];
function walletRoute($stateProvider) {
  console.log('hello wallet client routes');

  $stateProvider
    .state('wallet', {
      url: '/wallet',
			controller: 'lwWalletCtrl',
      template: '<span>Yo yo yo</span>',
      /*
      views: {
        '@': {
			    template: '<div>Hey wallet route</div>',
        }
      }
      */
    });
}
