// part C.1 - customer constructor
var Customer = function(name, balance, store){
  this.name = name;
  this.balance = balance;
  this.inventory = [];
  // 
  this.store = store;
};

Customer.prototype = {
  // part C.2 - can buy and sell records
  buyRecord: function(record){
    // line 14 = part C.3 - check customer has enough money
    if (this.balance >= record.price) {
      this.balance -= record.price;
      // store removes record from inventory + gets money
      this.store.sellRecord(record);
      // customer gets record
      this.inventory.push(record);
      return "Sold";
    } else {
      return "You are skint!";
    }
  },
  // part C.2 - can buy and sell records
  sellRecord: function(record){
    // store buys record from customer, adds to inventory
    this.store.buyRecord(record);
    var record_index = this.inventory.indexOf(record);
    // remove record from customer inventory
    this.inventory.splice(record_index, 1);
    // increase customer balance by sold record price
    this.balance += record.price;
  }
}


module.exports = Customer;