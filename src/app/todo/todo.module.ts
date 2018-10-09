import * as angular from "angular";
import "./todo.css";
import "angular-material-time-picker/dist/md-time-picker.css";
import "angular-material-time-picker";
import routes from "./todo.routes";
import * as moment from "moment";
import todoComponent from "./todo";
import { TodoService } from "./todo.service";
import { TodoFilter } from "./todo.filter";
TodoFilter.$inject = ["moment"];
export default angular
  .module("todo", ["md.time.picker"])
  .config(routes)
  .component("todo", todoComponent)
  .factory("TodoService", () => {
    return new TodoService();
  })
  .filter("cropString", TodoFilter.cropString)
  .filter("countTodayTasks", TodoFilter.countTodayTasks)
  .filter("countSevenDayTasks", ["moment", TodoFilter.countSevenDaysTasks])
  .filter("isoToMilliseconds", TodoFilter.isoToMilliseconds)
  .directive('autoFocus', function($timeout) {
    return {
        restrict: 'AE',
        link: function(_scope, _element) {
            $timeout(function(){
              console.log( _element[0])
                _element[0].focus();
            }, 0);
        }
    };
}).name;
