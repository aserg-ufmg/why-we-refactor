'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('wwr', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  //$routeProvider.otherwise({redirectTo: '/view1'});
}]);

//app.controller('View2Ctrl', [function() {

//}]);