import { useState, useRef } from "preact/hooks";
import List from "../meal-planner-components/List";

export default function AddGoalPopup(props: any) {
  const [goalType, setGoalType] = useState("goal");
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <dialog
      ref={props.popupRef}
      //   class="animate-bottom-slide transition-all duration-500 w-full h-full md:w-1/2 md:h-3/4 rounded-md shadow-sm shadow-black backdrop:bg-black backdrop:bg-opacity-55 flex flex-col items-center"
    >
      <div class="flex flex-row border-2 border-black rounded-full">
        <button
          class="rounded-full hover:bg-gray-500 px-2 py-1"
          onClick={() => setGoalType("goal")}
        >
          Goal
        </button>
        <button
          class="rounded-full hover:bg-gray-500 px-2 py-1"
          onClick={() => setGoalType("habit")}
        >
          Habit
        </button>
      </div>
      <form class="flex flex-col">
        <label>
          Add a goal to work towards
          <input type="text"></input>
        </label>
        <label>
          Set a deadline for your goal
          <input type="time"></input>
        </label>
        {goalType === "goal" && (
          <label>
            Add subtasks
            <List />
          </label>
        )}
      </form>
      <button onClick={() => props.closeDialog(props.popupRef)}>Close</button>
    </dialog>
  );
}
