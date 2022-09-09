import { generateId } from "../Utils/generateId.js";

export class Budget{

/**
   * @param {{name: string, price: number, description: string, itemId: string, id:string}} data 
   */

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.price = data.price
    this.itemId = data.itemId
}

  get BudgetsTemplate() {
  return `<div class="d-flex justify-content-between mb-1">
            <p>${this.name}</p>
            <div class="d-flex gap-5">
              <p>$${this.price}</p>
              <i onclick= "app.itemsController.deleteItem('${this.id}')"class="mdi mdi-delete text-danger selectable"></i>
            </div>
          </div>`
}

}
