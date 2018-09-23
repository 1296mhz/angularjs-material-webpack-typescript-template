import * as angular from "angular";
import "./todo.css";
import routes from "./todo.routes";
import * as moment from 'moment';
import todoComponent from "./todo";
import { TodoService } from "./todo.service";

export default angular
  .module("todo", [])
  .config(routes)
  .component("todo", todoComponent)
  //.service("TodoService", TodoService)
  .factory("TodoService", () => {
    return new TodoService();
  }).name;
