angular
  .module('lwWallet')
  .config(walletRoute);

walletRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
function walletRoute($stateProvider, $urlRouterProvider) {
  console.log('hello wallet client routes');

  $urlRouterProvider.otherwise('/wallet');

  $stateProvider
    .state('wallet', {
      url: '/wallet',
			controller: 'lwWalletCtrl',
      views: {
        '@': {
			    templateUrl: 'modules/wallet/views/wallet.client.view.html'
        }
      }
    });

  console.log('State is: ', $stateProvider);
}
