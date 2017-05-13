'use strict';
angular.module('myApp.users')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'usersController',
    controllerAs: 'vm'
  });
}]);