export default function ItemAddForm(props: any) {
  return (
    <form onSubmit={(e) => props.addTask(e)} class="flex flex-col">
      <label for="task">Task</label>
      <input
        type={"text"}
        name="task"
        id="task"
        value={props.newTask}
        onChange={(e: any) => props.changeTask(e)}
        placeholder="Add a New Task"
      ></input>
      <label for="deadline">Date</label>
      <input
        type={"date"}
        name="deadline"
        id="deadline"
        value={props.newDeadline}
        onChange={(e: any) => props.changeDeadline(e)}
      ></input>
      <label for="time">Time</label>
      <input
        type="time"
        min="00:00"
        max="23:00"
        name="time"
        id="time"
        value={props.newTime}
        onChange={(e: any) => props.changeTime(e)}
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
}
