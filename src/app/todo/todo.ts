import * as _ from "underscore";
import { ITask, ITasks } from "./todo.interfaces";
import { TodoService } from "./todo.service";

class TodoCtrl {
  constructor(
    private $rootScope: ng.IRootScopeService,
    public TodoService: TodoService,
    public moment: any
  ) {
    this.TodoService.tasks = TodoService.tasks;
    console.log("this.TodoService.tasks ", this.TodoService.tasks)
  }

  $onInit() {}

  task: ITask;
  settings = [
    {
      name: "Сегодня",
      extraScreen: "today",
      icon: "calendar_today",
      enabled: true
    },
    {
      name: "Следующие 7 дней",
      extraScreen: "next_seven_days",
      icon: "calendar_view_day",
      enabled: true
    }
  ];

  addTask() {
   
    let _newTask: ITask = {
      title: this.task.title,
      completed: false,
      createdAt: ""
    };

    if (!_newTask.title) {
      return;
    }
    _newTask.createdAt = new Date();
    this.TodoService.tasks.push(_newTask);
    this.TodoService.set();
    this.task.title = "";
  }

  removeTask(_deleteTask) {
    const i = this.TodoService.tasks.indexOf(_deleteTask);
    if (i != -1) {
      this.TodoService.tasks.splice(i, 1);
    }
    this.TodoService.set();
  }

  onCompleteTodo(){
    console.log("markCompleted ", this.TodoService.tasks)
    this.TodoService.set();
  }

}

TodoCtrl.$inject = ["$rootScope", "TodoService", "moment"];

export default {
  bindings: {},
  templateUrl: require("./todo.html"),
  controller: TodoCtrl
};
