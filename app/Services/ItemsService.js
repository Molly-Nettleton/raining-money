import { appState } from "../AppState.js";
import { Item } from "../Models/Item.js";
import { saveState } from "../Utils/Store.js";



class ItemService{
  removeItem(id) {
      console.log("is this running")
    let leftovers = appState.items.filter(item => item.id !== id)
    appState.items = leftovers
  }

  addItem(formData) {
    let item = new Item(formData)
    appState.items = [item, ...appState.items]
    console.log(formData);
}

}

export const itemService = new ItemService()