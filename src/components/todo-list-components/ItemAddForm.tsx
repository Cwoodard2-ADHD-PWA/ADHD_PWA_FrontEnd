// import { useEffect } from "preact/hooks";
import monthConverter from "../../helper-functions/month-converter";

export default function ItemAddForm(props: any) {
  return (
    // absolute w-full left-0 bottom-[0%] h-screen md:w-auto md:h-auto md:bottom-[60px] z-10
    // <div class="bg-gray-100 p-4 absolute w-full left-0 top-[5%] h-screen md:w-auto md:h-auto md:top-0 md:bottom-[60px] z-10 shadow-md animate-bottom-slide rounded-t-lg animate-bottom-slide"></div>
    <div class="bg-gray-100 p-4 shadow-md rounded-t-lg backdrop-blur w-full md:h-full">
      <form
        onSubmit={(e) => props.addTask(e)}
        class="flex flex-col gap-5 h-full w-full"
        id="addForm"
      >
        <h3>Add a Task</h3>
        <div>
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
          {/* w-20 relative */}
          <div class="flex flex-col gap-2">
            {/* <div class={`rounded-full py-1 px-4 text-center transition-all flex flex-col gap-2 justify-center`}> */}
            <label
              for="deadline"
              // class="absolute left-0 top-0"
            >
              {/* absolute left-0 top-0 */}
              Date
              {/* absolute opacity-0 w-full left-0 top-0 */}
            </label>
            <input
              type={"date"}
              name="deadline"
              id="deadline"
              value={props.currentTask.deadline}
              onChange={(e: any) => props.changeCurrentTask(e)}
              class="py-1 px-2 rounded-md"
            ></input>
            {/* </div> */}
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
        {/* //TODO: Create functionality to add subtasks */}
        <div class="flex flex-col gap-2">
          <ul>
            {props.currentTask.subtasks.map((subtask: any) => (
              <li>{subtask}</li>
            ))}
            <li>
              <div>
                <label for="subtasks">Subtasks</label>
                <div class="flex flex-row gap-2">
                  <input id="subtasks" name="subtasks" type="text"></input>
                  <button
                    type="button"
                    onClick={() => props.addSubtask("New Subtask")}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </li>
          </ul>
          {/* onKeyDown={(e: any) => props.changeCurrentTask(e)} */}
        </div>
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
