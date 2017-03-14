angular
  .module('lwWallet')
  .config(configureLocalStorage)
  .controller('walletDirCtrl', walletDirCtrl);

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
  vm.total = localStorageService.get('walletTotal') || 0;
  vm.transactions = localStorageService.get('walletTransactions') || []; 

  vm.appendTransaction = appendTransaction;
  function appendTransaction(amount, transactionType) {
    var subTotal = localStorageService.get('walletTransactions');

    subTotal = (transactionType === 'deposit') ? subTotal + amount : subTotal - amount;

    // Add this transaction to the model
    vm.transactions.push({
      type: transactionType,
      amount: parseInt(amount),
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

  // reset form on broadcasted event - scope too far to use otherwise
  $scope.$on('lwWalletReset', resetWallet);
  function resetWallet() {
    vm.total = 0;
    vm.transactions = [];
    localStorageService.set('walletTotal', vm.total);
    localStorageService.set('walletTransactions', vm.transactions);
  }
}
