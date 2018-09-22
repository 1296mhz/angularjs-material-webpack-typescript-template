interface ITask {
  title: string;
  completed: boolean;
  createdAt: any;
};

interface ITasks {
  tasks: ITask[]
};

export { ITask, ITasks };