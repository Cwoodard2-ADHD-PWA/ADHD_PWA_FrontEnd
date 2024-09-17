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
    // <div class="bg-gray-100 p-4 absolute w-full left-0 top-[5%] h-screen md:w-auto md:h-auto md:top-0 md:bottom-[60px] z-10 shadow-md animate-bottom-slide rounded-t-lg"></div>
    <div class="bg-gray-100 p-4 absolute w-full left-0 bottom-[0%] h-screen md:w-auto md:h-auto md:bottom-[60px] z-10 shadow-md animate-bottom-slide rounded-t-lg">
      <button
        onClick={() => props.cancelAddTask()}
        class="rounded-3xl md:hover:bg-white border-2 border-white py-1 px-2 transition-all"
      >
        Cancel
      </button>
      <form
        onSubmit={(e) => props.addTask(e)}
        class="flex flex-col gap-5"
        // onBlur={(e: any) => handleBlur(e)}
        // tabIndex={1}
        id="addForm"
      >
        <div>
          <label for="task">Task</label>
          <br></br>
          <div class="flex flex-row bg-white gap-2 items-center p-1">
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
              <span class="rounded-md p-2 bg-gray-200 text-nowrap">
                {monthConverter(
                  props.currentTask.deadline.slice(5, 7),
                  props.currentTask.deadline.slice(8, 10),
                )}
              </span>
            )}
            {props.currentTask.time && (
              <p class="rounded-md p-2 bg-gray-200">{props.currentTask.time}</p>
            )}
          </div>
        </div>
        <div>
          <label for="description">Description</label>
          <br></br>
          <input id="description" name="description" type="text"></input>
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
    </div>
  );
}
