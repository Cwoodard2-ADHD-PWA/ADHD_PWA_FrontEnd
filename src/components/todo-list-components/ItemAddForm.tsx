// import { useEffect } from "preact/hooks";
import monthConverter from "../../helper-functions/month-converter";
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
      class="flex flex-col gap-5 bg-gray-100 p-4 absolute w-full md:w-auto md:h-auto md:bottom-[60px] z-10 shadow-md animate-bottom-slide"
      // onBlur={(e: any) => handleBlur(e)}
      // tabIndex={1}
      id="addForm"
    >
      <div>
        <label for="task">Task</label>
        <div class="flex flex-row bg-white gap-2 items-center p-1">
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
          {props.currentTask.deadline && (
            <p class="rounded-md p-2 bg-gray-200">
              {monthConverter(
                props.currentTask.deadline.slice(5, 7),
                props.currentTask.deadline.slice(8, 10),
              )}
            </p>
          )}
          {props.currentTask.time && (
            <p class="rounded-md p-2 bg-gray-200">{props.currentTask.time}</p>
          )}
        </div>
        <div>
          <label for="description">Description</label>
          <input id="description" name="description" type="text"></input>
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
