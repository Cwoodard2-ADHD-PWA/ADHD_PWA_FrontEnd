import { useState } from "preact/hooks";
import DefaultPage from "../components/DefaultPage";
import TodoListItem from "../components/todo-list-components/TodoListItem";
import ItemEditForm from "../components/todo-list-components/ItemEditForm";
import ItemAddForm from "../components/todo-list-components/ItemAddForm copy";

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

  function changeTask(e: any) {
    setNewTask(e.target.value);
  }

  function changeDeadline(e: any) {
    setDeadline(e.target.value);
  }

  function changeTime(e: any) {
    setNewTime(e.target.value);
  }

  function addTask(e: any) {
    e.preventDefault();
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

  function enableEditing(todo: todoList) {
    setNewTask(todo.task);
    setDeadline(todo.deadline);
    setNewTime(todo.time);
    setItemEdit(todo.task);
  }

  function saveEdits(event: any, todo: todoList) {
    event.preventDefault();
    console.log(todo);
    let objectIndex: any = todos.indexOf(todo);
    console.log(objectIndex);
    let todoArray: any = todos;
    console.log(todoArray);
    todoArray[objectIndex] = {
      task: newTask,
      deadline: newDeadline,
      time: newTime,
      progress: "",
      subTasks: [],
    };
    console.log(todoArray);
    setTodos(todoArray);
    setNewTask("");
    setDeadline("");
    setNewTime("");
    setItemEdit("");
    setItemEdit("");
  }

  function completeTask(task: any) {
    const newList = todos.filter((todo: any) => todo !== task);
    setTodos(newList);
  }

  return (
    <>
      <DefaultPage>
        <div class="flex flex-col">
          <h1>Today</h1>
          <ul>
            {todos.map((todo: any, index: number) => (
              <li key={index} class="bg-gray-200">
                {itemEdit === todo.task ? (
                  <ItemEditForm
                    saveEdits={saveEdits}
                    newTask={newTask}
                    newDeadline={newDeadline}
                    newTime={newTime}
                    changeTask={changeTask}
                    changeDeadline={changeDeadline}
                    changeTime={changeTime}
                    todo={todo}
                  />
                ) : (
                  <TodoListItem
                    todo={todo}
                    completeTask={completeTask}
                    enableEditing={enableEditing}
                  />
                )}
              </li>
            ))}
          </ul>
          {addingTask && (
            <ItemAddForm
              addTask={addTask}
              newTask={newTask}
              newDeadline={newDeadline}
              newTime={newTime}
              changeTask={changeTask}
              changeDeadline={changeDeadline}
              changeTime={changeTime}
            />
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
