import { useState } from "preact/hooks";
import documentTitle from "../helper-functions/document-title";
import DefaultPage from "../components/layout-components/DefaultPage";
import TodoListItem from "../components/todo-list-components/TodoListItem";
import ItemEditForm from "../components/todo-list-components/ItemEditForm";
import ItemAddForm from "../components/todo-list-components/ItemAddForm";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";

function ToDoList() {
  documentTitle("Todo List");

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
  const [currentTask, setCurrentTask] = useState<todoList>({
    task: "",
    deadline: "",
    time: "",
    progress: "",
    subTasks: [],
  });

  // const [newTask, setNewTask] = useState<string>("");
  // const [newDeadline, setDeadline] = useState<string>("");
  // const [newTime, setNewTime] = useState<string>("");
  const [addingTask, setAddingTask] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<any>(
    date.toString().slice(0, 15),
  );

  /**
   *
   * @param e
   */
  function handleChange(e: any) {
    setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
  }

  // function changeTask(e: any) {
  //   setNewTask(e.target.value);
  // }

  // function changeDeadline(e: any) {
  //   setDeadline(e.target.value);
  // }

  // function changeTime(e: any) {
  //   setNewTime(e.target.value);
  // }

  /**
   *
   * @param action
   */
  function changeDate(action: number) {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + action);
    setCurrentDate(date.toString().slice(0, 15));
  }

  function addTask(e: any) {
    e.preventDefault();
    setTodos((prev: any) => [...prev, currentTask]);
    // setNewTask("");
    // setDeadline("");
    // setNewTime("");
    setAddingTask(false);
    setCurrentTask({
      task: "",
      deadline: "",
      time: "",
      progress: "",
      subTasks: [],
    });
  }

  function enableEditing(todo: todoList) {
    console.log("Was called");
    setCurrentTask({
      ...currentTask,
      task: todo.task,
      deadline: todo.deadline,
      time: todo.time,
    });
    // setNewTask(todo.task);
    // setDeadline(todo.deadline);
    // setNewTime(todo.time);
    setItemEdit(todo.task);
  }

  function saveEdits(event: any, todo: todoList) {
    event.preventDefault();
    let objectIndex: any = todos.indexOf(todo);
    console.log(objectIndex);
    let todoArray: any = todos;
    todoArray[objectIndex] = currentTask;
    setTodos(todoArray);
    // setNewTask("");
    // setDeadline("");
    // setNewTime("");
    setCurrentTask({
      task: "",
      deadline: "",
      time: "",
      progress: "",
      subTasks: [],
    });
    setItemEdit("");
  }

  function completeTask(task: any) {
    const newList = todos.filter((todo: any) => todo !== task);
    setTodos(newList);
  }

  return (
    <>
      <DefaultPage>
        <GeneralPageWrapper>
          <div class="flex flex-col md:flex-row gap-4 w-full self-start">
            <div>
              <h1>Hello Cameron</h1>
              <p>{currentDate}</p>
            </div>
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
              // TODO: Figure out best way to ensure these dates can easily be compared!
              // Maybe convert the stored date of a todo into a date and compare that way?
              console.log(todo);
              const date = new Date(currentDate);
              const testingDate = new Date(todo.deadline);
              console.log(JSON.stringify(date));
              console.log(JSON.stringify(testingDate));
              console.log(JSON.stringify(date) == JSON.stringify(testingDate));
              const checkDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
              console.log(
                todo.deadline.slice(0, 5) + todo.deadline.slice(6, 15),
              );
              console.log(checkDate);
              const toShow =
                checkDate ===
                todo.deadline.slice(0, 4) + todo.deadline.slice(6, 15);
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
                          currentTask={currentTask}
                          saveEdits={saveEdits}
                          enableEditing={enableEditing}
                          // newTask={newTask}
                          // newDeadline={newDeadline}
                          // newTime={newTime}
                          // changeTask={changeTask}
                          // changeDeadline={changeDeadline}
                          // changeTime={changeTime}
                          todo={todo}
                          changeCurrentTask={handleChange}
                          setCurrentTask={setCurrentTask}
                        />
                      )}
                    </li>
                  )}
                </>
              );
            })}
          </ul>
          <div class="md:relative mt-auto">
            {addingTask && (
              <ItemAddForm
                currentTask={currentTask}
                addTask={addTask}
                setAddingTask={setAddingTask}
                // newTask={newTask}
                // newDeadline={newDeadline}
                // newTime={newTime}
                // changeTask={changeTask}
                // changeDeadline={changeDeadline}
                // changeTime={changeTime}
                changeCurrentTask={handleChange}
                setCurrentTask={setCurrentTask}
                addingTask={addingTask}
              />
            )}
            <button
              onClick={() => setAddingTask(!addingTask)}
              class="rounded-3xl bg-gray-200 py-2 px-4"
            >
              {addingTask ? "Close" : "Add Task"}
            </button>
          </div>
        </GeneralPageWrapper>
      </DefaultPage>
    </>
  );
}

export default ToDoList;
