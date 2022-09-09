import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Item{

 /**
   * @param {{name: string, price: number, type: string, id?:string}} data 
   */


  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.price = data.price
    this.type = data.type
}

  get ItemTemplate() {
    console.log('Your template is loading ..')
    return /*html*/ `

<div class=" mb-3 bg-dark text-light p-4 rounded-2 ">
          <div class="text-end">
          <button onclick="app.itemsController.removeItem('${this.id}')" class="btn btn-danger">
          <b><i class="mdi mdi-cancel text-light"></i></b>
          </button>
          </div>
        <div class="d-flex align-items-center justify-content-evenly">
          <h2 class="text-center mb-0 me-2">${this.name}</h2>
          <h5 class="text-center mb-0">$100 out of $${this.price}</h5>
        </div>
        <br>
  
<div><h4>${this.BudgetsTemplate}</h4></diV>

        <form class="bg-light rounded p-1" onsubmit="app.budgetsController.addBudget('${this.id}')">
          <div class="d-flex w-100 ">
            <div class="flex-grow-1">
              <input class="form-control square-right" type="text" required minlength="2" name="name"
                placeholder="Name..." />
              <label for="name" class="visually-hidden">Name</label>
            </div>
            <div>
              <input class="form-control square" type="number" required min="0" name="price" placeholder="0.00" />
              <label for="price" class="visually-hidden">Price</label>
            </div>

            <button type="submit" class="btn btn-dark square-left" title="Add Item">
              <b><i class="mdi mdi-plus text-light"></i></b>
            </button>

          </div>
        </form>
        <div class="my-3 d-flex align-items-end py-3 border-top justify-content-between">
          <h5>Items: 1</h5>
          <h4>Total: 0</h4>
        </div>
        <div>
          
        
          </div>
      </div>
        
        `
    
}
  
  get BudgetsTemplate() {
    let template = ''
    this.Budgets.forEach(budget => template += budget.BudgetsTemplate)
    return template
  }
  
  get Budgets() {
    let budgets = appState.budgets.filter(budget => budget.itemId)
    return budgets
  }
}