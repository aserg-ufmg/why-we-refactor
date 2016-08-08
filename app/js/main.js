'use strict';

var app = angular.module('wwr', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'app/home.html'}).
    when('/projects', {templateUrl: 'app/projects.html', controller: 'projects'}).
    when('/analyzedCommits', {templateUrl: 'app/analyzedCommits.html', controller: 'thematicAnalysis'}).
    when('/allCommits', {templateUrl: 'app/allCommits.html', controller: 'allCommits'}).
    when('/thematicAnalysis', {templateUrl: 'app/thematicAnalysis.html', controller: 'thematicAnalysis'}).
    when('/analyzedCommits/:commitId', {templateUrl: 'app/commit.html', controller: 'commit'}).
    otherwise({redirectTo: '/'});
}]);

app.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
}]);

app.controller('projects', function projects($scope, $http) {
  $http({
    method: 'GET',
    url: 'data/projects.json'
  }).then(function successCallback(response) {
    $scope.projects = response.data;
  });
});

app.controller('thematicAnalysis', function thematicAnalysis($scope, $http) {
  $http({
    method: 'GET',
    url: 'data/thematicAnalysis.json'
  }).then(function successCallback(response) {
    $scope.commits = response.data;
  });
});

app.controller('allCommits', function allCommits($scope, $http) {
  $http({
    method: 'GET',
    url: 'data/refactorings.json'
  }).then(function successCallback(response) {
    $scope.commits = response.data;
  });
});

app.controller('commit', function commit($scope, $http, $routeParams) {
  $http({
    method: 'GET',
    url: 'data/commitMap.json'
  }).then(function successCallback(response) {
    $scope.commit = response.data[$routeParams.commitId];
  });
});
