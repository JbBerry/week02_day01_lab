const River =function(name,fish){
  this.name = name;
  this.fish = fish;
  // this.property
}
River.prototype.fishCount = function () {
  return this.fish.length;
};

River.prototype.fishRemove = function () {
  let fishFood = this.fish.shift();
  return fishFood;
};

// methods are added to the prototype of the class
module.exports = River;
