import { appState } from "../AppState.js"
import { Budget } from "../Models/Budget.js"
import { saveState } from "../Utils/Store.js"


class BudgetService{
  addBudget(newBudget) {
    let budget = new Budget(newBudget)
    appState.budgets = [budget, ...appState.budgets]
    saveState('budgets', appState.budgets)
  }

  removeBudget(id) {
    console.log("Budget removed.")
    let leftovers = appState.budgets.filter(item => item.id !== id)
    appState.budgets  = leftovers
}

}

export const budgetService = new BudgetService