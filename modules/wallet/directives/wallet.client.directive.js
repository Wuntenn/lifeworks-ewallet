angular
  .module('lwWallet')
  .directive('lwWalletElement', lwWalletDirective);

function lwWalletDirective() {
  console.log('inside the wallet directive');

  return {
    restrict: 'E',
    templateUrl: 'modules/wallet/views/wallet-directive.client.view.html',
    controller: 'walletDirCtrl',
    controllerAs: 'vm',
    link: walletLink
  };


  function walletLink(scope, element, attrs, vm) {
    console.log('Hey: walletLink: ', vm);  


  }
}
