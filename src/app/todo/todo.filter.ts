import { ITodoFilters } from "./todo.interfaces";

export class TodoFilter {
  constructor() {}

  static cropString(): any {
    return str => {
      const ourString = str.substr(0, 50);
      return ourString + "...";
    };
  }

  static countTodayTasks(): any {
    return _tasks => {
      const _startDay = new Date();
      _startDay.setHours(0, 0, 0, 0);
      const startDay = _startDay.getTime();

      const _endDay = new Date();
      _endDay.setHours(23, 59, 59, 999);
      const endDay = _endDay.getTime();

      let countToday: number = 0;
      for(let i = 0; i < _tasks.length; i++){
        const _currentDate = new Date(_tasks[i].createdAt);
        const currentDate = _currentDate.getTime();
        if(startDay <= currentDate && currentDate <= endDay){
          countToday = countToday +1;
        }
      }

      return countToday;
    };
  }
}
