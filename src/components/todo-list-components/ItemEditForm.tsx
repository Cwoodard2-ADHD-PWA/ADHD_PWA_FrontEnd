import AddEditForm from "./AddEditForm";
import { useState } from "preact/hooks";

export default function ItemEditForm(props: any) {
  // TODO: Make it so that input elements automatically switch between a view component and an editable component when clicked on
  // TODO: This needs to be made to match up better with the Add Task form; However, this form will likely utilize a different design to an extent

  const [subtask, setSubtask] = useState<string>("");

  function handleAddSubtask() {
    props.addSubtask(subtask);
    setSubtask("");
  }

  return (
    <>
      <div class="bg-gray-100 p-4 shadow-md animate-bottom-slide rounded-t-lg backdrop-blur w-full h-full">
        <form
          onSubmit={(e) => props.saveEdits(e, props.todo)}
          class="flex flex-col gap-5"
        >
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
            <input
              required
              type={"text"}
              name="task"
              id="task"
              value={props.currentTask.task}
              onChange={(e: any) => props.changeCurrentTask(e)}
              placeholder="Add a New Task"
            ></input>
          </div>
          <div>
            <label for="deadline">Date</label>
            <br></br>
            <input
              type={"date"}
              name="deadline"
              id="deadline"
              value={props.currentTask.deadline}
              onChange={(e: any) => props.changeCurrentTask(e)}
            ></input>
          </div>
          <div>
            <label for="time">Time</label>
            <br></br>
            <input
              type="time"
              min="00:00"
              max="23:00"
              name="time"
              id="time"
              value={props.currentTask.time}
              onChange={(e: any) => props.changeCurrentTask(e)}
            ></input>
          </div> */}
          <div class="flex flex-row">
            <button
              type="button"
              class="rounded-3xl hover:bg-white py-1 px-2 transition-all"
              onClick={() => props.cancelEdit()}
            >
              Cancel
            </button>
            {/* class="rounded-3xl bg-white py-2 px-4 ml-auto" */}
            <button
              type="button"
              class="rounded-3xl hover:bg-white py-1 px-2 ml-auto transition-all"
              onClick={() => props.removeTask(props.currentTask.task)}
            >
              Delete Task
            </button>
            <button
              type="submit"
              class="rounded-3xl hover:bg-white py-1 px-2 ml-auto transition-all"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
