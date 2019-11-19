///WHERE WE KEEP ALL OF OUR DATA!!!!

let _state = {
  count: 0
};

class Mods {
  constructor(price, quantity, multiplier) {
    this.price = price
    this.quantity = quantity
    this.multiplier = multiplier
  }
}

class Store {
  get State() {
    return _state;
  }
}
const STORE = new Store();
let PICKAXE = new Mods(10, 0, 1);
let CART = new Mods(500, 0, 100);
let MINER = new Mods(100, 0, 50);
let ROVER = new Mods(1000, 0, 500);
export default STORE;
export { PICKAXE, CART, MINER, ROVER };

