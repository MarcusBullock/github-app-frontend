githubApp.controller('listController', function($http) {
  var self = this;
  self.users = [];
  self.isUpdated = false;
  self.beingUpdated = false;

  angular.element(document).ready(function () {
        self.isUpdated = false;
        self.loadData();
    });

  self.loadData = function () {
    $http.get('http://localhost:9292/read').success(function(json) {
      self.users = json;
    });
  };

  self.updateUsers = function () {
    self.isUpdated = false;
    self.beingUpdated = true;
    $http.post('http://localhost:9292/create').success(function(json) {
      self.users = json;
      self.beingUpdated = false;
      self.isUpdated = true;
    });
  };

  console.log(self.isUpdated);
});
