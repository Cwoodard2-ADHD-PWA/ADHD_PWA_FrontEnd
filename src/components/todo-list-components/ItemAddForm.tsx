// import { useEffect } from "preact/hooks";
import { useState } from "preact/hooks";
import AddFormSubtask from "./AddFormSubtask";
import AddEditForm from "./AddEditForm";
import monthConverter from "../../helper-functions/month-converter";

export default function ItemAddForm(props: any) {
  const [subtask, setSubtask] = useState<string>("");

  function handleAddSubtask() {
    props.addSubtask(subtask);
    setSubtask("");
  }

  return (
    // absolute w-full left-0 bottom-[0%] h-screen md:w-auto md:h-auto md:bottom-[60px] z-10
    // <div class="bg-gray-100 p-4 absolute w-full left-0 top-[5%] h-screen md:w-auto md:h-auto md:top-0 md:bottom-[60px] z-10 shadow-md animate-bottom-slide rounded-t-lg animate-bottom-slide"></div>
    <div class="bg-gray-100 p-4 shadow-md rounded-t-lg backdrop-blur w-full md:h-full">
      <form
        onSubmit={(e) => props.addTask(e)}
        class="flex flex-col gap-5 h-full w-full"
        id="addForm"
      >
        <h3 class="text-3xl">Add a Task</h3>
        <AddEditForm
          currentTask={props.currentTask}
          changeCurrentTask={props.changeCurrentTask}
          removeSubtask={props.removeSubtask}
          setSubtask={setSubtask}
          handleAddSubtask={handleAddSubtask}
          subtask={subtask}
        />
        {/* <div>
          <label for="task">Task</label>
          <br></br>
          <div class="flex flex-row bg-white gap-2 items-center p-1 rounded-sm">
            <input
              required
              type={"text"}
              name="task"
              id="task"
              class="p-1"
              value={props.currentTask.task}
              maxLength={30}
              onChange={(e: any) => props.changeCurrentTask(e)}
              placeholder="Add a New Task"
            ></input>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-3 justify-between">
          <div class="flex flex-col gap-2">
            <label
              for="deadline"
            >
              Date
            </label>
            <input
              type={"date"}
              name="deadline"
              id="deadline"
              value={props.currentTask.deadline}
              onChange={(e: any) => props.changeCurrentTask(e)}
              class="py-1 px-2 rounded-md"
            ></input>
            {props.currentTask.deadline && (
              <span
                class={`rounded-full text-nowrap w-full py-1 px-4 text-center bg-white ${props.currentTask.deadline && "border border-green-600"} animate-left-slide transition-all`}
              >
                {monthConverter(
                  props.currentTask.deadline.slice(5, 7),
                  props.currentTask.deadline.slice(8, 10),
                )}
              </span>
            )}
          </div>
          <div class="flex flex-col gap-2">
            <label for="time" class={``}>
              Time
            </label>
            <input
              type="time"
              min="00:00"
              max="23:59"
              name="time"
              id="time"
              value={props.currentTask.time}
              onChange={(e: any) => props.changeCurrentTask(e)}
              class="py-1 px-2 rounded-md"
            ></input>
            {props.currentTask.time && (
              <span
                class={`rounded-full text-nowrap w-full py-1 px-4 text-center bg-white ${props.currentTask.time && "border border-green-600"} animate-left-slide transition-all`}
              >
                {props.currentTask.time}
              </span>
            )}
          </div>
          <div class="flex flex-col gap-2">
            <label for="lists">Lists</label>
            <select
              id="lists"
              name="lists"
              onChange={(e: any) => props.changeCurrentTask(e)}
              value={props.currentTask.lists}
              class="py-1 px-2 rounded-md"
            >
              <option value="Testing">Select An Option</option>
              <option value="Testing 2">Other List</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="description">Notes</label>
          <textarea
            id="description"
            name="description"
            type="text"
            value={props.currentTask.description}
            onChange={(e: any) => props.changeCurrentTask(e)}
            class="py-1 px-2 rounded-md"
          ></textarea>
        </div>
        <div class="flex flex-col gap-2">
          <label for="subtasks">Subtasks</label>
          <ul>
            {props.currentTask.subtasks.map((subtask: any) => (
              <li>
                <AddFormSubtask subtask={subtask} removeSubtask={props.removeSubtask}/>
              </li>
            ))}
            <li>
              <div>
                <div class="flex flex-row gap-2">
                  <input
                    id="subtasks"
                    name="subtasks"
                    type="text"
                    value={subtask}
                    onChange={(e: any) => setSubtask(e.target.value)}
                  ></input>
                  <button type="button" onClick={() => handleAddSubtask()}>
                    Add Task
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
        <div class="flex flex-row items-center justify-evenly">
          <button
            type="button"
            onClick={() => props.cancelAddTask()}
            class="rounded-3xl md:hover:bg-white border-2 border-white py-1 px-2 transition-all"
          >
            Cancel
          </button>
          <button type="submit" class="rounded-3xl bg-white py-2 px-4">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
