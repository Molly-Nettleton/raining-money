import { generateId } from "../Utils/generateId.js";

export class Item{

 /**
   * @param {{name: string, price: number, description: string, id?:string}} data 
   */


  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.price = data.price
    this.description = data.description
}

  get ItemTemplate() {
    console.log('hello')
    return /*html*/ `
           <div class="col-3 mb-3 bg-dark text-light p-4 rounded-2 ">
          <div class="d-flex align-items-center justify-content-evenly">
            <h2 class="text-center mb-0 me-2">${this.name}</h2>
            <h5 class="text-center mb-0">${this.price}</h5>
          </div>
          <div>
            <p class="text-center">${this.description}</p>
          </div>
          <button onclick="app.itemsController.removeItem('${this.id}')" class="btn btn-danger">remove</button>
        </div>`
    
}
  
}