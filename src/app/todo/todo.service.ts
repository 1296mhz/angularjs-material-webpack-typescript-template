import * as _ from "underscore";
import { ITask } from "./todo.interfaces";

export class TodoService {
  constructor(public moment: any) {
    this.tasks = [];
  }
  public tasks = [];
  saveTask(_newTask) {
    _newTask.createdAt = new Date();
    console.log("saveTask ", _newTask);
    this.tasks.push(_newTask);
    localStorage.setItem("todos", JSON.stringify(this.tasks));
    console.log(this.getCountTodayTasks());
    // console.log("this.tasks ", this.tasks);
    return this.tasks;
  }

  removeTask(_task) {
    console.log("Removed ", _task);
    const i = this.tasks.indexOf(_task);
    if (i != -1) {
      this.tasks.splice(i, 1);
    }
    localStorage.setItem("todos", JSON.stringify(this.tasks));
    return this.tasks;
  }

  getTasks(): any {
    const todosStr: string = localStorage.getItem("todos");
    this.tasks = JSON.parse(todosStr);
    return this.tasks;
  }

  getCountTodayTasks() {
    const startOfDay = this.moment()
      .startOf("day")
      .subtract(1, "millisecond");
    const endOfDay = this.moment().endOf("day");
    console.log("startOfDay", startOfDay)
    console.log("endOfDay ", endOfDay)
    let todayCounter: number = 0;
    console.log(">>> ", this.tasks.length )
    for (var i = 0; i < this.tasks.length; i++) {
      if (startOfDay <= this.tasks[i].createdAt <= endOfDay) {
        console.log(this.tasks[i].createdAt)
        todayCounter = todayCounter + 1;
      }
    }

    console.log("Итого  ", todayCounter);
  }
}

TodoService.$inject = ["moment"];
