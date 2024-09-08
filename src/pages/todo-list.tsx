import { useState, useRef } from "preact/hooks";
import DefaultPage from "../components/DefaultPage";

function ToDoList() {
  interface todoList {
    task: string;
    deadline: string;
    time: string;
    progress: string;
    subTasks: string[];
  }

  const [todos, setTodos] = useState<todoList[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [newDeadline, setDeadline] = useState<string>("");
  const [newTime, setNewTime] = useState<string>("");
  const [addingTask, setAddingTask] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<string>("");

  const taskRef = useRef<any>("");

  function changeTask(e: any) {
    setNewTask(e.target.value);
  }

  function changeDeadline(e: any) {
    setDeadline(e.target.value);
  }

  function changeTime(e: any) {
    setNewTime(e.target.value);
  }

  function addTask() {
    setTodos(
      todos.concat({
        task: newTask,
        deadline: newDeadline,
        time: newTime,
        progress: "",
        subTasks: [],
      }),
    );
    setNewTask("");
    setDeadline("");
    setNewTime("");
    setAddingTask(false);
  }

  function editTask(event: any, todo: todoList) {
    event.preventDefault();
    let objectIndex: any = todos.indexOf(todo);
    let todoArray: any = todos;
    console.log(todoArray);
    todoArray[objectIndex] = {
      task: taskRef.current.value,
      deadline: event.target.deadline.value,
      time: event.target.time.value,
      progress: "",
      subTasks: [],
    };
    console.log(todoArray);
    setTodos(todoArray);
    setItemEdit("");
  }

  function completeTask(task: any) {
    const newList = todos.filter((todo: any) => todo !== task);
    setTodos(newList);
  }

  return (
    <>
      <DefaultPage>
        <div>
          <ul>
            {todos.map((todo: any, index: number) => (
              <li key={index} class="bg-gray-200">
                {itemEdit === todo.task ? (
                  <form onSubmit={(e) => editTask(e, todo)}>
                    <input
                      type={"text"}
                      name="task"
                      id="task"
                      // value={todo.task}
                      // onChange={(e: any) => changeTask(e)}
                      placeholder="Add a New Task"
                      ref={taskRef}
                    ></input>
                    <input
                      type={"date"}
                      name="deadline"
                      id="deadline"
                      value={todo.deadline}
                      onChange={(e: any) => changeDeadline(e)}
                    ></input>
                    <input
                      type="time"
                      min="00:00"
                      max="23:00"
                      name="time"
                      id="time"
                      value={todo.time}
                      onChange={(e: any) => changeTime(e)}
                    ></input>
                    <button type="submit">Save Changes</button>
                  </form>
                ) : (
                  <div class="flex flex-row">
                    <button onClick={() => completeTask(todo)}>Complete</button>
                    <p>{todo.task}</p>
                    <p>{todo.deadline}</p>
                    <p>{todo.time}</p>
                    <button onClick={() => setItemEdit(todo.task)}>Edit</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
          {addingTask && (
            <div>
              <input
                type={"text"}
                name="task"
                value={newTask}
                onChange={(e: any) => changeTask(e)}
                placeholder="Add a New Task"
              ></input>
              <input
                type={"date"}
                name="deadline"
                value={newDeadline}
                onChange={(e: any) => changeDeadline(e)}
              ></input>
              <input
                type="time"
                min="00:00"
                max="23:00"
                name="time"
                onChange={(e: any) => changeTime(e)}
              ></input>
              <button onClick={() => addTask()}>Add</button>
            </div>
          )}
          <button onClick={() => setAddingTask(!addingTask)}>
            {addingTask ? "Close" : "Add Task"}
          </button>
        </div>
      </DefaultPage>
    </>
  );
}

export default ToDoList;
