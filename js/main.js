'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('wwr', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider.
    when('/', {templateUrl: 'home.html'}).
    when('/projects', {templateUrl: 'projects.html'}).
    when('/analyzedCommits', {templateUrl: 'analyzedCommits.html'}).
    when('/allCommits', {templateUrl: 'allCommits.html'}).
    when('/thematicAnalysis', {templateUrl: 'thematicAnalysis.html'}).
    otherwise({redirectTo: '/'});

  //$routeProvider.otherwise({redirectTo: '/view1'});
}]);

//app.controller('View2Ctrl', [function() {

//}]);