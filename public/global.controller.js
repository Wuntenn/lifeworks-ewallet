angular
  .module('app')
  .controller('lwGlobal', globalCtrl);

globalCtrl.$inject = ['$scope'];
function globalCtrl($scope) {
  var vm = this;
  vm.isNavCollapsed = true;

  console.log('yo from global', vm);
  vm.test = 'hey this is a test';
}
