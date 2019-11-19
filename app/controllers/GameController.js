import store from "../store.js";
import GameService from "../services/GameService.js";
import { PICKAXE, CART, MINER, ROVER } from "../store.js";

//PRIVATE PARTS
let _countElem = document.getElementById("count");
let _pickElem = document.getElementById("pickaxe");
let _minerElem = document.getElementById("miner");
let _cartElem = document.getElementById("cart");
let _roverElem = document.getElementById("rover");

function _draw() {
  //update the UI
  _countElem.innerText = store.State.count.toString();
  _pickElem.innerHTML = `Pickaxe: ${PICKAXE.quantity} - $${PICKAXE.price}`
  _minerElem.innerHTML = `Miner: ${MINER.quantity} - $${MINER.price}`
  _cartElem.innerHTML = `Cart: ${CART.quantity} - $${CART.price}`
  _roverElem.innerHTML = `Rover: ${ROVER.quantity} - $${ROVER.price}`
}

GameService.startInterval(_draw);
_draw();
export default class GameController {
  // PUBLIC PARTS

  mine() {
    GameService.updateCount();
    _draw();
  }
  buyP() {
    GameService.buyPickaxe();
    _draw()
  }
  buyM() {
    GameService.buyMiner();
    _draw()
  }
  // autoUp() {
  //   _draw()
  //   GameService.autoUpgrade();
  // }
}
