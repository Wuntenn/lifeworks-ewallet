angular.module('app')
  .controller('lwGlobal', globalCtrl)

globalCtrl.$inject = ['$scope'];
function globalCtrl($scope) {
  console.log('yo from global');
  $scope.test = 'hey this is a test';
}

// console.log('inside global js');
