import * as _ from "underscore";
import { ITask } from "./todo.interfaces";
import * as moment from "moment";

export class TodoService {
  public tasks: ITask[];
  private moment: any = moment;
  constructor() {
    this.tasks = [];
    this.tasks = this.get();
    console.log("Init this.tasks ", this.tasks)
  }

  STORAGE_ID = 'todos';

  set(): ITask[] {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.tasks));
    const todosStr: string = localStorage.getItem("todos");
    this.tasks = JSON.parse(todosStr);
    return this.tasks;
  }

  get(): ITask[] {
    this.tasks = JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
    return this.tasks;
  }

}

TodoService.$inject = ["moment"];
