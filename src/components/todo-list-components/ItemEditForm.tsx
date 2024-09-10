export default function ItemEditForm(props: any) {
  return (
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
          value={props.newTask}
          onChange={(e: any) => props.changeTask(e)}
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
      <button type="submit">Save Changes</button>
    </form>
  );
}
