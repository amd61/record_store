var assert = require("assert");
var Record = require("../Record");
var Store = require("../Store");
var Customer = require("../Customer");

describe("Customer", function(){
  var store;
  var record1;
  var customer;

  beforeEach(function(){
    store = new Store("Store Name", "Edinburgh", []);
    record1 = new Record("Artist 1", "Title 1", 12.99);
    customer = new Customer("Customer Name", 101.00, store);
  });

  it('has a name', function() {
    assert.equal("Customer Name", customer.name);
  })

  // part C.2
  it('has their balance reduced when they buy a record', function(){
    var balance_before = customer.balance;
    customer.buyRecord(record1);
    assert.equal(balance_before - record1.price, customer.balance);
  });
  // part C.2
  it('has their balance increased when they sell a record', function(){
    customer.buyRecord(record1);
    var balance_before = customer.balance;
    customer.sellRecord(record1);
    assert.equal(balance_before + record1.price, customer.balance);
  });
  // part C.3
  it('cannot spend money if skint', function(){
    customer.balance = 5.99;
    var response = customer.buyRecord(record1);
    assert.equal("You are skint!", response);
  });

});
