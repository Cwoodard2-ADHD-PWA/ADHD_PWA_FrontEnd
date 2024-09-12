export default function ItemAddForm(props: any) {
  return (
    <form
      onSubmit={(e) => props.addTask(e)}
      class="flex flex-col gap-5 bg-gray-100 p-4 absolute bottom-[60px] z-10 shadow-md"
    >
      <div>
        <div class="flex flex-row bg-white gap-2 items-center">
          <label for="task">Task</label>
          <br></br>
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
          <p>{props.newTime}</p>
          <p>{props.newDeadline}</p>
        </div>
      </div>
      <div>
        <label for="deadline">Date</label>
        <br></br>
        <input
          type={"date"}
          name="deadline"
          id="deadline"
          value={props.newDeadline}
          onChange={(e: any) => props.changeDeadline(e)}
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
          value={props.newTime}
          onChange={(e: any) => props.changeTime(e)}
        ></input>
      </div>
      <button type="submit" class="rounded-3xl bg-white py-2 px-4">
        Add Task
      </button>
    </form>
  );
}
