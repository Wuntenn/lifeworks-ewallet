angular
  .module('lwWallet')
  .config(configureLocalStorage)
  .controller('walletDirCtrl', walletDirCtrl)
  .directive('positive',  positive);
  //.directive('enoughFunds', enoughFunds);

// Setup a prefix to be used inside the local storage cache
configureLocalStorage.$inject = ['localStorageServiceProvider'];
function configureLocalStorage(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('lw');
}

walletDirCtrl.$inject = ['localStorageService', '$scope'];
function walletDirCtrl(localStorageService, $scope) {
  console.log('Hello: wallet directive');
  var vm = this;

  // set up the the totals
  vm.total = parseInt(localStorageService.get('walletTotal')) || 0;
  vm.transactions = localStorageService.get('walletTransactions') || []; 

  vm.appendTransaction = appendTransaction;
  function appendTransaction(amount, transactionType) {
    var subTotal = parseInt(localStorageService.get('walletTotal')),
      amount = parseInt(amount),
      type = (angular.isNumber(amount) && !isNaN(amount) && (amount > 0)) ? transactionType : 'invalid transaction';

    // only proceed with valid transactions
    if (type !== 'invalid transaction') {
      // update subtotal
      subTotal = (transactionType === 'deposit') ? subTotal + amount : subTotal - amount;

      // Add this transaction to the model
      vm.transactions.push({
        type: type, 
        amount: amount,
        subTotal: subTotal,
        date: new Date()
      });

      // Update the total
      vm.total = subTotal;

      // Persist the total & transaction to local storage
      localStorageService.set('walletTotal', vm.total);
      localStorageService.set('walletTransactions', vm.transactions);

      // reset the transaction amount
      vm.transactionAmount = 0;
    }
  }

  // reset form on broadcasted event - scope too far to use otherwise
  $scope.$on('lwWalletReset', resetWallet);
  function resetWallet() {
    vm.total = 0;
    vm.transactions = [];
    localStorageService.set('walletTotal', vm.total);
    localStorageService.set('walletTransactions', vm.transactions);
  }
}

var REAL_NUMBER_REGEX = /([0-9]+[.|,][0-9])|([0-9][.|,][0-9]+)|([0-9]+)/g;
function positive() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.positive = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (REAL_NUMBER_REGEX.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
}

/*
function enoughFunds() {
  return {
    require: ['ngModel', '^^walletDirCtrl'],
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.enoughFunds = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
}
*/
