'use strict';

var app = angular.module('wwr', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'home.html'}).
    when('/projects', {templateUrl: 'projects.html'}).
    when('/analyzedCommits', {templateUrl: 'analyzedCommits.html', controller: 'analyzedCommitsCtrl'}).
    when('/allCommits', {templateUrl: 'allCommits.html'}).
    when('/thematicAnalysis', {templateUrl: 'thematicAnalysis.html'}).
    otherwise({redirectTo: '/'});
}]);


app.controller('analyzedCommitsCtrl', function analyzedCommitsCtrl($scope) {
  $scope.commits = [
    {
        "id": 1105586,
        "repository": "https://github.com/SecUpwN/Android-IMSI-Catcher-Detector.git",
        "sha1": "e235f884f2e0bc258da77b9c80492ad33386fa86",
        "author": "Marvin Arnold",
        "message": "Refactored AIMSICDDbAdapter::DbHelper#onCreate for easier reading\n",
        "motivations": [
            "EM: Decompose method to improve readability"
        ],
        "others": [
            "Unknown",
            "ide: Unknown"
        ]
    }];
});