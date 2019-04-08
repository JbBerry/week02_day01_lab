const Bear = require Bear('./bear');
const Fish = require Fish('./fish');
const River = require River('./river');

const yogi = new Bear (`Yogi`,[], `Amazon`);

const george = new Fish (`George`);
const sharkey = new Fish (`Sharkey`);
const mobey = new Fish (`Mobey`);

const fishStock = [george, sharkey, mobey];

const amazon = new River (`Amazon`,fishStock);
