const Bear = require('../bear');
const Fish = require('../fish');
const River = require('../river');

describe('ecosystem', () => {
  let yogi;
  let george;
  let sharkey;
  let mobey;
  let fishStock;
  let amazon;

  beforeEach(() => {
    george = new Fish (`George`);
    sharkey = new Fish (`Sharkey`);
    mobey = new Fish (`Mobey`);
    fishStock = [george, sharkey, mobey];
    amazon = new River (`Amazon`, fishStock);
    yogi = new Bear (`Yogi`,`Grizzly`,[], amazon);
  });
  test('A fish should have a name', () => {
    expect(george.name).toBe("George");
  });

  test('A river should have a name', () => {
    expect(amazon.name).toBe("Amazon");
  });

  test('A river should hold fish', () => {
    expect(amazon.fishCount()).toBe(3);
  });

  test('A river should lose a fish when a bear eats a fish, the bear should be able to contain fish', () => {
    expect(amazon.fishCount()).toBe(3);
    expect(yogi.foodCount()).toBe(0);
    yogi.eatFish()
    expect(amazon.fishCount()).toBe(2);
    expect(yogi.foodCount()).toBe(1);
  });

  test('A bear should have a name and a type', () => {
    expect(yogi.name).toBe("Yogi");
    expect(yogi.type).toBe("Grizzly");
  });

  test('A bear should start with an empyty belly', () => {
    expect(yogi.belly).toEqual([]);
  });

  test('A bear should be able to roar', () => {
    expect(yogi.roar()).toEqual(`my name is Yogi, hear me ROAR!`);
  });
});
