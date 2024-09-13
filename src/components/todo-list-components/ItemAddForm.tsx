// import { useEffect } from "preact/hooks";
/**
 *
 * @param props
 * @returns
 */
export default function ItemAddForm(props: any) {
  // useEffect(() => {
  //   document.getElementById('addForm')?.focus();
  // }, [props.addingTask])

  // function handleBlur(e: any) {
  //   if (!e.currentTarget.contains(e.relatedTarget)) {
  //     props.setCurrentTask({
  //       task: "",
  //       deadline: "",
  //       time: "",
  //       progress: "",
  //       subTasks: [],
  //     })
  //     props.setAddingTask(false);
  //   }
  // }

  return (
    <form
      onSubmit={(e) => props.addTask(e)}
      class="flex flex-col gap-5 bg-gray-100 p-4 absolute bottom-[60px] z-10 shadow-md"
      // onBlur={(e: any) => handleBlur(e)}
      // tabIndex={1}
      id="addForm"
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
          <p>{props.currentTask.time}</p>
          <p>{props.currentTask.deadline}</p>
        </div>
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
      <button type="submit" class="rounded-3xl bg-white py-2 px-4">
        Add Task
      </button>
    </form>
  );
}
