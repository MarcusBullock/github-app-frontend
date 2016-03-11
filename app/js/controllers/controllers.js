githubApp.controller('listController', function($http) {
  var self = this;
  self.users = [];
  self.isUpdated = false;

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
    $http.post('http://localhost:9292/create').success(function(json) {
      self.isUpdated = true;
      self.users = json;
      angular.element(document.querySelector('#update-success')).show();
    });
  };

  console.log(self.isUpdated);
});
