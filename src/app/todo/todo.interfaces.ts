interface ITask {
  title: string;
  completed: boolean;
  createdAt: any;
}
 interface ITodoStorage {
  get(): ITask[];
  put(todos: ITask[]);
}

interface ITasks {
  tasks: ITask[];
}

export { ITask, ITasks, ITodoStorage };
