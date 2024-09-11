import { useState } from "preact/hooks";
import DefaultPage from "../components/DefaultPage";
import TodoListItem from "../components/todo-list-components/TodoListItem";
import ItemEditForm from "../components/todo-list-components/ItemEditForm";
import ItemAddForm from "../components/todo-list-components/ItemAddForm";

function ToDoList() {
  interface todoList {
    task: string;
    deadline: string;
    time: string;
    progress: string;
    subTasks: string[];
  }

  const date = new Date();
  console.log(date);

  // TODO: Convert all form states into one state
  const [todos, setTodos] = useState<todoList[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [newDeadline, setDeadline] = useState<string>("");
  const [newTime, setNewTime] = useState<string>("");
  const [addingTask, setAddingTask] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<any>(
    date.toString().slice(0, 15),
  );

  function changeTask(e: any) {
    setNewTask(e.target.value);
  }

  function changeDeadline(e: any) {
    setDeadline(e.target.value);
  }

  function changeTime(e: any) {
    setNewTime(e.target.value);
  }

  function changeDate(action: number) {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + action);
    setCurrentDate(date.toString().slice(0, 15));
  }

  function addTask(e: any) {
    e.preventDefault();
    setTodos((prev: any) => [
      ...prev,
      {
        task: newTask,
        deadline: newDeadline,
        time: newTime,
        progress: "",
        subTasks: [],
      },
    ]);
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
    let objectIndex: any = todos.indexOf(todo);
    console.log(objectIndex);
    let todoArray: any = todos;
    todoArray[objectIndex] = {
      task: newTask,
      deadline: newDeadline,
      time: newTime,
      progress: "",
      subTasks: [],
    };
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
        <div class="flex flex-col sm:w-full mx-20 my-10 md:max-h-screen w-max-[800px] items-center gap-3">
          <div class="flex flex-col md:flex-row gap-4 w-full self-start">
            <h1>Hello Cameron</h1>
            <div class="flex flex-row gap-2 items-center ml-auto">
              <button
                onClick={() => changeDate(-1)}
                class="rounded-full px-2 bg-gray-100"
              >
                {" "}
                -{" "}
              </button>
              <p>{currentDate}</p>
              <button
                onClick={() => changeDate(1)}
                class="rounded-full px-2 bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          <ul class="flex flex-col gap-3 max-h-[250px] md:max-h-[550px] overflow-auto">
            {todos.map((todo: any, index: number) => {
              const date = new Date(currentDate);
              const checkDate = `${date.getFullYear()}-${"0" + (date.getMonth() + 1)}-${date.getDate()}`;
              const toShow = checkDate === todo.deadline;
              return (
                <>
                  {(toShow || todo.deadline === "") && (
                    <li key={index} class="flex flex-col md:flex-row gap-4">
                      <TodoListItem
                        todo={todo}
                        completeTask={completeTask}
                        enableEditing={enableEditing}
                      />
                      {itemEdit === todo.task && (
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
                      )}
                    </li>
                  )}
                </>
              );
            })}
          </ul>
          <div class="relative mt-auto">
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
            <button
              onClick={() => setAddingTask(!addingTask)}
              class="rounded-3xl bg-gray-200 py-2 px-4"
            >
              {addingTask ? "Close" : "Add Task"}
            </button>
          </div>
        </div>
      </DefaultPage>
    </>
  );
}

export default ToDoList;
