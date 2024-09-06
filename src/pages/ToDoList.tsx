import { useState } from "preact/hooks";

function ToDoList() {
  interface todoList {
    task: string;
    deadline: string;
    subTasks: string[];
  }

  const [todos, setTodos] = useState<todoList[]>([
    { task: "", deadline: "", subTasks: [] },
  ]);
  const [newTask, setNewTask] = useState<string>("");
  const [newDeadline, setDeadline] = useState<string>("");

  function changeTask(e: any) {
    setNewTask(e.target.value);
  }

  function changeDeadline(e: any) {
    setDeadline(e.target.value);
  }

  function addTask() {
    setTodos(
      todos.concat({ task: newTask, deadline: newDeadline, subTasks: [] }),
    );
    setNewTask("");
  }

  function editTask() {}

  function completeTask(task: any) {
    console.log(task);
    const newList = todos.filter((todo: any) => todo !== task);
    console.log(newList);
    setTodos(newList);
  }

  return (
    <>
      <div>
        <input
          type={"text"}
          name="task"
          value={newTask}
          onChange={(e: any) => changeTask(e)}
        ></input>
        <input
          type={"text"}
          name="deadline"
          value={newDeadline}
          onChange={(e: any) => changeDeadline(e)}
        ></input>
        <button onClick={() => addTask()}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo: any, key: number) => (
            <li key={key}>
              <p>{todo.task}</p>
              <p>{todo.deadline}</p>
              <button onClick={() => editTask()}>Complete</button>
              <button onClick={() => completeTask(todo)}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
