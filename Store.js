// part A.2 - store with name, city, inventory.

// constructor / set properties of this object
var Store = function(name, city, inventory){
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  // part A.3 - give store a balance
  this.balance = 1000; // starting balance
};


Store.prototype = {
  // part A.4 - add record to store
  addRecord: function(record){
    this.inventory.push(record);
  },

  // part B.2 - list store's inventory nicely
  listInventory: function() {
    var outputData = ""
    for (var r of this.inventory) {
      outputData += r.toString() + "\n";
    }
    return outputData;
  },

  // part B.3 - sell a record + reduce balance
  sellRecord: function(record) {
    // find the record in the inventory
    var record_index = this.inventory.indexOf(record);
    // now remove this item from the inventory
    this.inventory.splice(record_index, 1);
    // credit the balance for the sale
    this.balance += record.price;
  },
  // required for part C.1
  buyRecord: function(record) {
    // add record to inventory
    this.inventory.push(record);
    // credit the balance for the sale
    this.balance -= record.price;
  },

  // part B.4 - print out a summary of store w/ for loop through inventory
  storeSummary: function() {
    var response = "Balance: £" + this.balance + "\n" + "Inventory: \n"
    for (var r of this.inventory) {
      response += r.toString() + "\n";
    }
    return response;
  }
}

module.exports = Store;