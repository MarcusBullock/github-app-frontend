var githubApp = angular.module('githubApp', ['ngResource']);
  app.controller('MyCtrl', function($scope, $http) {
    $scope.loadData = function () {
    $http.get('/Users/ScottGledhill/Desktop/Projects/GithubApp').success(function(data) {
      $scope.items = data;
    });
  };
});
