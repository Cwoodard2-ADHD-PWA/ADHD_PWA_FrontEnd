import { useState, useRef } from "preact/hooks";
import List from "../meal-planner-components/List";

export default function AddGoalPopup(props: any) {
  const [goalType, setGoalType] = useState("goal");
  const [goalList, setGoalList] = useState([]);
  const [goalForm, setGoalForm] = useState<any>({
    fullGoal: "",
    shortGoal: "",
    deadline: "",
    subtasks: [{ subtaskName: "", subtaskImage: "" }],
  });
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e);
    props.handleGoalSubmit(goalForm);
  }

  function handleFormChange(e: any) {
    console.log(goalForm);
    setGoalForm({ ...goalForm, [e.target.id]: e.target.value });
  }

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
      <form class="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <label>
          Add a goal to work towards
          <input
            type="text"
            id="fullGoal"
            value={goalForm.fullGoal}
            onChange={(e) => handleFormChange(e)}
          ></input>
        </label>
        <label>
          Set a deadline for your goal
          <input
            type="time"
            id="deadline"
            value={goalForm.deadline}
            onChange={(e) => handleFormChange(e)}
          ></input>
        </label>
        {goalType === "goal" && (
          <label>
            Add subtasks
            <List />
          </label>
        )}
        <button type="submit">Continue</button>
      </form>
      <button onClick={() => props.closeDialog(props.popupRef)}>Close</button>
    </dialog>
  );
}
