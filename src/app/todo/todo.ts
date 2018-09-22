import * as _ from "underscore";

interface ITask {
  title: string;
  completed: boolean;
}

class TodoCtrl {
  constructor(private $rootScope: ng.IRootScopeService) {
   // console.log("todo ctrl ", _);
  }

  $onInit() {}
  tasks = [];
  

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

  task: ITask;

  addTask() {

    let newTask: ITask = {
      title: this.task.title,
      completed: false
    };

    if (!newTask.title) {
      return;
    }

    this.tasks.push(newTask);
    this.task.title = "";
  }

  removeTask(ev) {
    console.log("Removed ", ev);
    
  }
}

TodoCtrl.$inject = ["$rootScope"];

export default {
  bindings: {},
  templateUrl: require("./todo.html"),
  controller: TodoCtrl
};
