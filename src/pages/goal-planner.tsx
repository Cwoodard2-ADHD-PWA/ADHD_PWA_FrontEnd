import { useState, useRef } from "preact/hooks";
import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import documentTitle from "../helper-functions/document-title";
import AddGoalPopup from "../components/goal-planner-components/AddGoalPopup";
import weekdayConverter from "../helper-functions/weekday-converter";
import {
  getCurrentWeek,
  getNextWeek,
  getPreviousWeek,
} from "../helper-functions/get-week";
import monthConverter from "../helper-functions/month-converter";
import Calendar from "../components/Calendar";

export default function GoalPlanner() {
  documentTitle("Goal Planner");

  interface subTaskObject {
    subtaskName: string;
    subtaskImage: string;
  }

  interface goalObject {
    fullGoal: string;
    shortGoal: string;
    deadline: string;
    subtasks: subTaskObject[];
  }

  let testGoalList: goalObject[] = [
    {
      fullGoal: "This is where a full placeholder for goal 1 would go",
      shortGoal: "goal 1",
      deadline: "",
      subtasks: [{ subtaskName: "goal 1", subtaskImage: "bg-green-400" }],
    },
    {
      fullGoal: "this is where a placeholder for goal 2 would go",
      shortGoal: "goal2",
      deadline: "",
      subtasks: [{ subtaskName: "goal 2", subtaskImage: "bg-purple-400" }],
    },
  ];

  function showPopup(refToUse: any) {
    console.log("here");
    console.log(refToUse);
    if (refToUse.current) {
      refToUse.current.showModal();
    }
  }

  function hidePopup(refToUse: any) {
    if (refToUse.current) {
      refToUse.current.close();
    }
  }

  function handleGoalChange(e: any) {
    setCurrentGoal(testGoalList[e.target.value]);
  }

  function handleGoalSubmit(goal: goalObject) {
    console.log(goal);
    testGoalList.push(goal);
    console.log(testGoalList);
    setCurrentGoal(testGoalList[testGoalList.length - 1]);
  }

  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [currentDay, setCurrentDay] = useState<number>(currentDate.getDate());
  const [currentWeek, setCurrentWeek] = useState<any>(getCurrentWeek());
  const [currentGoal, setCurrentGoal] = useState<goalObject>(testGoalList[0]);
  const goalPopupRef = useRef<HTMLDialogElement | null>(null);
  const calendarPopupRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DefaultPage>
      <div class="flex flex-col sm:w-full md:max-h-screen w-max-[800px] items-center gap-3">
        <div class="flex flex-row self-end gap-4 py-4 px-4">
          <select onChange={(e: any) => handleGoalChange(e)}>
            {testGoalList.map((goal, key) => {
              return <option value={key}>{goal.shortGoal}</option>;
            })}
          </select>
          <button onClick={() => showPopup(goalPopupRef)}>+</button>
          <div class="h-10 w-10 bg-purple-300 rounded-full"></div>
        </div>
        <div class="flex flex-row self-start w-full px-10 justify-between items-center">
          <div>
            <p>{monthConverter(currentDate.getMonth())}</p>
            <p>{currentDate.getFullYear()}</p>
          </div>
          <div class="flex flex-row gap-4">
            <button
              onClick={() =>
                setCurrentWeek(getPreviousWeek(currentDate, setCurrentDate))
              }
            >
              {"<"}
            </button>
            {currentWeek.map((day: any) => {
              return (
                <div class="flex flex-col gap-1">
                  <button
                    class="relative rounded-full h-10 w-10 border-2 border-black flex justify-center items-center after:absolute after:bg-yellow after:w-10 after:h-10 after:bottom-0 after:left-0"
                    onClick={() => setCurrentDay(day)}
                  >
                    {day}
                  </button>
                  {day === currentDay && (
                    <div class="h-1 w-10 bg-yellow-300"></div>
                  )}
                </div>
              );
            })}
            <button
              onClick={() =>
                setCurrentWeek(getNextWeek(currentDate, setCurrentDate))
              }
            >
              {">"}
            </button>
          </div>
          <button onClick={() => showPopup(calendarPopupRef)}>
            Open Calendar
          </button>
        </div>
        <div>
          <h1 class="text-center">"{currentGoal.fullGoal}"</h1>
        </div>
        <ul>
          {currentGoal.subtasks.map((subtask) => {
            return (
              <li>
                <div
                  class={`h-10 w-10 rounded-full ${subtask.subtaskImage}`}
                ></div>
                <p>{subtask.subtaskName}</p>
              </li>
            );
          })}
        </ul>
        <AddGoalPopup
          popupRef={goalPopupRef}
          closeDialog={hidePopup}
          handleGoalSubmit={handleGoalSubmit}
        />
        <Calendar
          popupRef={calendarPopupRef}
          closeDialog={hidePopup}
          viewedDate={currentDate}
        />
      </div>
    </DefaultPage>
  );
}
