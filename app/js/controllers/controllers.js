githubApp.controller('listController', function($http) {
  var self = this;
  self.users = [];
  self.usersJson = undefined;

  self.loadData = function () {
    $http.get('http://localhost:9292/read').success(function(json) {
      self.users = json;
    });
  };

  self.loadData();

});
