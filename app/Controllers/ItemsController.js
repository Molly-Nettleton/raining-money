import { appState } from "../AppState.js";
import { Item } from "../Models/Item.js";
import { itemService } from "../Services/ItemsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawItems() {
  let template = ''
  appState.items.forEach(item => template += item.ItemTemplate)
  setHTML('items', template)
  }


export class ItemsController{

  constructor() {
    // TODO uncomment when you want this to draw
  _drawItems()
appState.on('items', _drawItems)
}

addItem(){
  window.event.preventDefault()
  const form = window.event.target
  let formData = getFormData(form)

  itemService.addItem(formData)

 // @ts-ignore
 form.reset()
}
  
  removeItem(id) {
    if (window.confirm('Do you want to remove this item?')) {
      itemService.removeItem(id)
    }
  }
  
}