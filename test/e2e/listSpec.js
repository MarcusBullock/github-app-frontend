describe("Github application", function(){

  it("Displays a list", function(){
    browser.get("http://localhost:8080");
    var user = element.all(by.css(".user-class")).first();
    expect(user.getText()).toContain("Username: vicky\nRepo count: 10\nFollower count: 32");
  });

  it('Filters users from the list based on name/alphabetical order', function() {
   var userList = element.all(by.repeater(user in listCtrl.users));
   var query = element(by.model('query'));

   expect(userList.count()).toBe(3);
   query.sendKeys('Scott');
   expect(userList.count()).toBe(1);
   query.clear();
   query.sendKeys('Marcus');
   expect(userList.count()).toBe(whatevs);
 });
});
