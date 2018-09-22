import * as _ from "underscore";
import { ITask, ITasks } from "./todo.interfaces";
import { TodoService } from "./todo.service";

class TodoCtrl {
  constructor(
    private $rootScope: ng.IRootScopeService,
    public TodoService: TodoService,
    public moment: any
  ) {
    this.tasks = this.TodoService.getTasks();
  }

  $onInit() {}
  tasks = [];
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

  addTask(keyEvent) {
    this.TodoService.getCountTodayTasks();
    let _newTask: ITask = {
      title: this.task.title,
      completed: false,
      createdAt: ""
    };

    if (!_newTask.title) {
      return;
    }

    this.TodoService.saveTask(_newTask);
    this.task.title = "";
    this.tasks = this.TodoService.getTasks();
  }

  removeTask(_deleteTask) {
    this.TodoService.removeTask(_deleteTask);
    this.tasks = this.TodoService.getTasks();
  }
}

TodoCtrl.$inject = ["$rootScope", "TodoService", "moment"];

export default {
  bindings: {},
  templateUrl: require("./todo.html"),
  controller: TodoCtrl
};
