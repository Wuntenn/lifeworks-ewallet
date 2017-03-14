angular
  .module('app')
  .controller('lwGlobal', globalCtrl);

globalCtrl.$inject = ['$rootScope'];
function globalCtrl($rootScope) {
  var vm = this;
  vm.isNavCollapsed = true;


  vm.bcReset = broadcastReset;
  function broadcastReset() {
    console.log('reseting form');
    $rootScope.$broadcast('lwWalletReset');
  }

  console.log('yo from global', vm);
  //vm.test = 'hey this is a test';
}
