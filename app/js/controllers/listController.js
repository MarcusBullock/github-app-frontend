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


var usersMock = [
  { 'username': 'vicky',
    'repo_count': 10,
    'follower_count': 32,
    'avatar': 'https://getbunnybox.com/wp-content/uploads/2015/06/Number-1.jpg'
  },
  {
    'username': 'rufus',
    'repo_count': 8,
    'follower_count': 47,
    'avatar': 'http://a-z-animals.com/media/animals/images/original/sloth5.jpg'
  }
];
