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
   <div class="col-5 mb-3">
          <div class="d-flex justify-content-around">
            <h2 class="text-center">${this.name}</h2>
            <h3 class="text-center">${this.price}</h3>
          </div>
          <div>
            <p>${this.description}</p>
          </div>
          <button onclick="app.itemsController.removeItem('${this.id}')" class="btn btn-danger">remove</button>
        </div>`
    
}
  
}