import { Budget } from "./Models/Budget.js"
import { Item } from "./Models/Item.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', Value)

  /**@type {import('./Models/Item').Item[]} */
  items = loadState('items', Item)
  // NOTE ^ saves to local storage
/**@type {import('./Models/Budget').Budget[]} */
  budgets = loadState('budget', Budget)
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
