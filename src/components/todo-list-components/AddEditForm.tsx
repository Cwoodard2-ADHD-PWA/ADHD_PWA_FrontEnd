import AddFormSubtask from "./AddFormSubtask";
import monthConverter from "../../helper-functions/month-converter";

export default function AddEditForm(props: any) {
  return (
    <>
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
        <label for="subtasks">Subtasks</label>
        <ul>
          {props.currentTask.subtasks.map((subtask: any) => (
            <li>
              <AddFormSubtask
                subtask={subtask}
                removeSubtask={props.removeSubtask}
              />
              <button
                type="button"
                onClick={() => props.removeSubtask(subtask.task)}
              >
                Remove
              </button>
            </li>
          ))}
          <li>
            <div>
              <div class="flex flex-row gap-2">
                <input
                  id="subtasks"
                  name="subtasks"
                  type="text"
                  value={props.subtask}
                  onChange={(e: any) => props.setSubtask(e.target.value)}
                ></input>
                <button type="button" onClick={() => props.handleAddSubtask()}>
                  Add Task
                </button>
              </div>
            </div>
          </li>
        </ul>
        {/* onKeyDown={(e: any) => props.changeCurrentTask(e)} */}
      </div>
    </>
  );
}
