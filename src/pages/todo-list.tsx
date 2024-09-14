import { useState } from "preact/hooks";
import documentTitle from "../helper-functions/document-title";
import DefaultPage from "../components/layout-components/DefaultPage";
import TodoListItem from "../components/todo-list-components/TodoListItem";
import ItemEditForm from "../components/todo-list-components/ItemEditForm";
import ItemAddForm from "../components/todo-list-components/ItemAddForm";
import RightSideBar from "../components/todo-list-components/RightSideBar";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";

function ToDoList() {
  documentTitle("Todo List");

  interface todoList {
    task: string;
    description: string;
    deadline: string;
    time: string;
    complete: boolean;
    subTasks: string[];
  }

  const date = new Date();
  console.log(date);

  // TODO: Convert all form states into one state
  const [todos, setTodos] = useState<todoList[]>([]);
  const [currentTask, setCurrentTask] = useState<todoList>({
    task: "",
    description: "",
    deadline: "",
    time: "",
    complete: false,
    subTasks: [],
  });

  const [progress, setProgress] = useState<number>(0);
  const [addingTask, setAddingTask] = useState<boolean>(false);
  const [itemEdit, setItemEdit] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<any>(
    date.toString().slice(0, 15),
  );

  function setDefaultTodoState() {
    return {
      task: "",
      description: "",
      deadline: "",
      time: "",
      complete: false,
      subTasks: [],
    };
  }

  /**
   *
   * @param e
   */
  function handleChange(e: any) {
    setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
  }

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

    // TODO: Change the state such that the progress bar state is a counter of current complete items
    // TODO: Additionally, add logic that that results in progress being set accordingly to the date it is on
    console.log(todos);
    setTodos((prev: any) => [...prev, currentTask]);
    setAddingTask(false);
    setCurrentTask(setDefaultTodoState());
  }

  function enableEditing(todo: todoList) {
    setCurrentTask({
      ...currentTask,
      task: todo.task,
      deadline: todo.deadline,
      time: todo.time,
    });
    setItemEdit(todo.task);
  }

  function saveEdits(event: any, todo: todoList) {
    event.preventDefault();
    let objectIndex: any = todos.indexOf(todo);
    console.log(objectIndex);
    let todoArray: any = todos;
    todoArray[objectIndex] = currentTask;
    setTodos(todoArray);
    setCurrentTask(setDefaultTodoState());
    setItemEdit("");
  }

  function completeTask(task: any) {
    setProgress((prev) => prev + 1);
    setTodos(
      todos.map((todo) =>
        todo.task == task.task ? { ...task, complete: true } : todo,
      ),
    );
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
              <progress
                id="completion"
                max="100"
                value={((progress / todos.length) * 100).toString()}
                class="rounded-lg bg-blue"
              >
                {((progress / todos.length) * 100).toString()}
              </progress>
              {todos.length > 0 && <p>{`${progress} of ${todos.length}`}</p>}
              {/* <button
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
              </button> */}
            </div>
          </div>
          <ul class="flex flex-col gap-3 max-h-[250px] md:max-h-[550px] overflow-auto">
            {todos.map((todo: any, index: number) => {
              const date = new Date(currentDate);
              const testingDate = new Date(todo.deadline);
              const toShow: boolean =
                JSON.stringify(date).slice(1, 11) ==
                JSON.stringify(testingDate).slice(1, 11);
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
        <RightSideBar />
      </DefaultPage>
    </>
  );
}

export default ToDoList;
