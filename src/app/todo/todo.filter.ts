import { ITodoFilters } from "./todo.interfaces";

export class TodoFilter {

  constructor(){}
  
  static cropString(): any {
    return (str) => {
      const ourString = str.substr(0, 50);
      return ourString + "...";
    };
  }
  
  static countTodayTasks(): any {
    return (_tasks) => {
      return _tasks.length
    }
  }
}