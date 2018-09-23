import * as angular from "angular";
import "./todo.css";
import routes from "./todo.routes";
import * as moment from 'moment';
import todoComponent from "./todo";
import { TodoService } from "./todo.service";
import { TodoFilter } from "./todo.filter";
export default angular
  .module("todo", [])
  .config(routes)
  .component("todo", todoComponent)
  .factory("TodoService", () => {
    return new TodoService();
  })
  .filter("cropString", TodoFilter.cropString)
  .filter("countTodayTasks", TodoFilter.countTodayTasks )
  .name;
