
// Part A.1 - record object with artist, title, price
var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;
};


Record.prototype = {
  // part B.1 - make a nice string for the record
  toString: function(){
    return this.artist + ": " + this.title + ", £" + this.price;
  }
}

module.exports = Record;