interface ITask {
  title: string;
  completed: boolean;
  createdAt: any;
}

interface ITodoService {
  tasks: ITask[];
  get(): ITask[];
  set(): ITask[];
}

interface ITodoFilters {
  cropString(): void;
  countTodayTasks(): void;
}

export { ITask, ITodoService, ITodoFilters };
