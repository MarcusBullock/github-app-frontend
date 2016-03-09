describe("Github application", function(){

  it("Displays a list", function(){
    browser.get("http://localhost:8080");
    var user = element.all(by.css(".user-class")).first();
    expect(user.getText()).toContain("Username: vicky Repo count: 10 Follower count: 32");
  });

});
