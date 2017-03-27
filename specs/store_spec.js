var assert = require("assert");
var Record = require("../Record");
var Store = require("../Store");

// set up tests for store
describe("Store", function(){
  var store;
  var record1;
  var record2;
  var record3;

  // before tests run
  beforeEach(function(){
    store = new Store("Store Name", "Edinburgh", []);
    record1 = new Record("Artist 1", "Title 1", 12.99);
    record2 = new Record("Artist 2", "Title 2", 10.99);
    record3 = new Record("Artist 3", "Title 3", 1.99);
  });

  // part A.2
  it('should have a name', function(){
    assert.equal("Store Name", store.name);
  });
  // part A.2
  it('should have a city', function() {
    assert.equal("Edinburgh", store.city);
  });
  // part A.4
  it('should allow records to be added', function() {
    var record_count_before =  store.inventory.length;
    store.addRecord(record1);
    assert.equal(record_count_before + 1, store.inventory.length);
  })
  // part B.2
  it('should print inventory details', function() {
    store.addRecord(record1);
    store.addRecord(record2);
    var expectedResult = "Artist 1: Title 1, £12.99\nArtist 2: Title 2, £10.99\n";
    assert.equal(expectedResult, store.listInventory());
  })
  //part B.3
  it('can sell a record + increase balance when sold', function() {
    store.addRecord(record1);
    var balance_before =  store.balance;
    store.sellRecord(record1);
    assert.equal(balance_before + record1.price, store.balance);
  })
  // part B.3
  it('can sell a record + inventory is reduced by 1', function() {
    store.addRecord(record1);
    var inventory_before =  store.inventory.length;
    store.sellRecord(record1);
    assert.equal(inventory_before - 1, store.inventory.length);
  })
  // part B.4
  it('can return a report of store status', function() {
    store.addRecord(record1);
    store.addRecord(record2);
    var report = store.storeSummary();
    assert.equal("Balance: £" + store.balance + "\n" + "Inventory: \n" + record1.toString() + "\n" + record2.toString() + "\n", report);

  })
  // required for Part C.1
  it('can buy a record + reduces money when sold', function() {
    var balance_before =  store.balance;
    store.buyRecord(record1);
    assert.equal(balance_before - record1.price, store.balance);
  })

});