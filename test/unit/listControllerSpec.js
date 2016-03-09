describe("listController", function(){
  var ctrl;

  var users = [
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

  var json = JSON.stringify(users);


  beforeEach(function(){
    module("githubApp");
    inject(function($controller){
      ctrl = $controller("listController");
    });
  });

  it('properly parses input json into user array', function() {
    ctrl.unpackJson(json);
    expect(ctrl.users).toEqual(users);
  });

});
