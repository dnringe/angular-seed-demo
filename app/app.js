'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.users',
  'myApp.view2',
  'myApp.version',
  'ui.grid'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!'); 

  $routeProvider.otherwise({redirectTo: '/users'});
}]);
