angular
  .module('lwWallet')
  .directive('lwWalletElement', lwWalletDirective);

function lwWalletDirective() {
  return {
    restrict: 'E',
    templateUrl: 'modules/wallet/views/wallet-directive.client.view.html',
    // controller: 'walletDirCtrl'
  };

  console.log('inside the wallet directive');
}
