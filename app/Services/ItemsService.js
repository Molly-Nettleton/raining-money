import { appState } from "../AppState.js";
import { Item } from "../Models/Item.js";
import { saveState } from "../Utils/Store.js";



class ItemService{
  removeItem(id) {
      console.log("Item removed.")
    let leftovers = appState.items.filter(item => item.id !== id)
    appState.items = leftovers
  }

  addItem(formData) {
    let item = new Item(formData)
    appState.items = [item, ...appState.items]
    console.log(formData);
    saveState('items', appState.items)
    console.log(appState.items)
  }
  // NOTE ^ saves to local storage

}

export const itemService = new ItemService()