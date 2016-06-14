'use strict';

var app = angular.module('wwr', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'home.html'}).
    when('/projects', {templateUrl: 'projects.html', controller: 'projects'}).
    when('/analyzedCommits', {templateUrl: 'analyzedCommits.html', controller: 'thematicAnalysis'}).
    when('/allCommits', {templateUrl: 'allCommits.html'}).
    when('/thematicAnalysis', {templateUrl: 'thematicAnalysis.html', controller: 'thematicAnalysis'}).
    otherwise({redirectTo: '/'});
}]);

app.controller('projects', function projects($scope, $http) {
  $http({
    method: 'GET',
    url: '/projects.json'
  }).then(function successCallback(response) {
    $scope.projects = response.data;
  });
});

app.controller('thematicAnalysis', function thematicAnalysis($scope, $http) {
  $http({
    method: 'GET',
    url: '/thematicAnalysis.json'
  }).then(function successCallback(response) {
    $scope.commits = response.data;
  });
});
