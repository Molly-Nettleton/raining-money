import { appState } from "../AppState.js";
import { itemService } from "../Services/ItemsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.BudgetsTemplate)
  setHTML('budgets',template)
}

export class BudgetsController{

  constructor() {
    
    appState.on('budgets', _drawBudgets)
  }

  addBudget(budgetId) {
    window.event.preventDefault()
    const form = window.event.target
    let newBudget = getFormData(form)
    newBudget.budgetId = budgetId
    itemService.addItem(newBudget)
    // @ts-ignore
    form.reset()
  }
}