import { BudgetsController } from "./Controllers/BudgetsController.js";
import { ItemsController } from "./Controllers/ItemsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  itemsController = new ItemsController();
  budgetsController = new BudgetsController();
}

window["app"] = new App();
