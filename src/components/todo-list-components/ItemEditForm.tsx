export default function ItemEditForm(props: any) {
  return (
    <>
      <form
        onSubmit={(e) => props.saveEdits(e, props.todo)}
        class="flex flex-col gap-5 bg-gray-100 p-4 z-10 absolute md:top-0 bottom-[0%] left-0 h-screen w-full md:w-auto md:h-auto md:relative shadow-md transition-all animate-bottom-slide md:animate-left-slide rounded-t-lg"
      >
        <div class="flex flex-row">
          <button class="rounded-3xl hover:bg-white py-1 px-2 transition-all">
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
      </form>
    </>
  );
}
