// Application module
angular
  .module('app', ['ui.bootstrap', 'lwWallet'])
  .config(appConfig);

console.log('hello ng application module');

// Configure routes not to use the hash
// Used in legacy browsers
appConfig.$inject = ['$locationProvider'];
function appConfig($locationProvider) {
  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
