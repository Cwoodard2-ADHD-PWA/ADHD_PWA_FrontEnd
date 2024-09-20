export default function ItemEditForm(props: any) {
  // TODO: Make it so that input elements automatically switch between a view component and an editable component when clicked on
  // TODO: This needs to be made to match up better with the Add Task form; However, this form will likely utilize a different design to an extent
  return (
    <>
      <div class="bg-gray-100 p-4 shadow-md animate-bottom-slide rounded-t-lg backdrop-blur w-full h-full">
        <form
          onSubmit={(e) => props.saveEdits(e, props.todo)}
          class="flex flex-col gap-5"
        >
          <div>
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
          </div>
          <div class="flex flex-row">
            <button
              class="rounded-3xl hover:bg-white py-1 px-2 transition-all"
              onClick={() => props.cancelEdit()}
            >
              Cancel
            </button>
            {/* class="rounded-3xl bg-white py-2 px-4 ml-auto" */}
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
