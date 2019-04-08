const Bear =function(name,type,belly,river){
  this.name = name;
  this.type = type;
  this.belly = [];
  this.river = river
  // this.property
}
Bear.prototype.roar = function () {
  return (`my name is ${this.name}, hear me ROAR!`);
};

Bear.prototype.foodCount = function () {
  return this.belly.length;
};

Bear.prototype.eatFish = function () {
  let fishFood = this.river.fishRemove()
  this.belly.push(fishFood);
};
// methods are added to the prototype of the class
module.exports = Bear;
