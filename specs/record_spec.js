var assert = require("assert");
var Record = require("../Record");

describe("Record", function(){
  var record1;

  beforeEach(function(){
    record1 = new Record("Artist 1", "Title 1", 12.99);
  });
  // part B.1
  it('should return a string representation', function(){
    assert.equal("Artist 1: Title 1, £12.99", record1.toString());
  });

});