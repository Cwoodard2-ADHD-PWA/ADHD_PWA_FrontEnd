export interface todoList {
  task: string;
  description: string;
  deadline: string;
  time: string;
  complete: boolean;
  subTasks: string[];
}

export interface subTaskObject {
  subtaskName: string;
  subtaskImage: string;
}

export interface goalObject {
  fullGoal: string;
  shortGoal: string;
  deadline: string;
  subtasks: subTaskObject[];
  checkpoints: [];
}
