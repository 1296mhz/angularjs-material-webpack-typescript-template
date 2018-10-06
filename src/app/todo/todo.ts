import * as _ from "underscore";
import { ITask } from "./todo.interfaces";
import { TodoService } from "./todo.service";

class TodoCtrl {
  constructor(
    private $rootScope: ng.IRootScopeService,
    public $scope: ng.IScope,
    public TodoService: TodoService,
    public moment: any,
  ) {
    this.TodoService.tasks = TodoService.tasks;
  
  }

  $onInit() {}

  task: ITask;
 
  addTask() {
   
    let _newTask: ITask = {
      title: this.task.title,
      completed: false,
      createdAt: ""
    };

    if (!_newTask.title) {
      return;
    }

    _newTask.createdAt = Date.now();
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
    this.TodoService.set();
  }

  keypressHandler(parm){
    if(parm.key === "Enter"){
      this.addTask();
    }
      
  }
}

TodoCtrl.$inject = ["$rootScope", "$scope", "TodoService", "moment"];

export default {
  bindings: {},
  templateUrl: require("./todo.html"),
  controller: TodoCtrl
};
