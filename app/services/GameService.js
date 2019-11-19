import store from "../store.js";
import { PICKAXE, CART, MINER, ROVER } from "../store.js";
let _countElem = document.getElementById("count");
let _pickElem = document.getElementById("pickaxe");
let _minerElem = document.getElementById("miner");
let _cartElem = document.getElementById("cart");
let _roverElem = document.getElementById("rover");
class GameService {
  updateCount() {
    // throw new Error("YOU SHALL NOT PASS")
    store.State.count++;
    store.State.count += PICKAXE.quantity * PICKAXE.multiplier;
    store.State.count += CART.quantity * CART.multiplier;
  }
  buyPickaxe() {
    if (store.State.count >= PICKAXE.price) {
      store.State.count -= PICKAXE.price;
      PICKAXE.quantity++;
      PICKAXE.price += 10;
      _pickElem.innerHTML = `Pickaxe: ${PICKAXE.quantity} - $${PICKAXE.price}`
    }
  }
  buyMiner() {
    if (store.State.count >= MINER.price) {
      store.State.count -= MINER.price;
      MINER.quantity++;
      MINER.price += 50;
      _minerElem.innerHTML = `Miner: ${MINER.quantity} - $${MINER.price}`
    }
  }
  buyCart() {
    if (store.State.count >= CART.price) {
      store.State.count -= CART.price;
      CART.quantity++;
      CART.price += 100;
      _cartElem.innerHTML = `Cart: ${CART.quantity} - $${CART.price}`
    }
  }
  buyRover() {
    if (store.State.count >= ROVER.price) {
      store.State.count -= ROVER.price;
      ROVER.quantity++;
      ROVER.price += 500;
      _roverElem.innerHTML = `Rover: ${ROVER.quantity} - $${ROVER.price}`
    }
  }
  autoUpgrade() {
    store.State.count += MINER.quantity * MINER.multiplier;
    store.State.count += ROVER.quantity * ROVER.multiplier;
  }
  startInterval(callback) {
    setInterval(() => {
      this.autoUpgrade()
      callback()
    }, 3000)
  }
}

const GAMESERVICE = new GameService()

export default GAMESERVICE
