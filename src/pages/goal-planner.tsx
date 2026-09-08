import { useState, useRef } from "preact/hooks";
import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import documentTitle from "../helper-functions/document-title";
import AddGoalPopup from "../components/goal-planner-components/AddGoalPopup";
import weekdayConverter from "../helper-functions/weekday-converter";
import { goalObject, subTaskObject } from "../interfaces/interfaces";
import {
  getCurrentWeek,
  getNextWeek,
  getPreviousWeek,
} from "../helper-functions/get-week";
import monthConverter from "../helper-functions/month-converter";
import Calendar from "../components/Calendar";

export default function GoalPlanner() {
  documentTitle("Goal Planner");

  let testGoalList: goalObject[] = [
    {
      fullGoal: "This is where a full placeholder for goal 1 would go",
      shortGoal: "goal 1",
      deadline: "2025-4-13",
      subtasks: [
        { subtaskName: "goal 1", subtaskImage: "border-blue-400 border-2" },
      ],
      checkpoints: [],
    },
    {
      fullGoal: "this is where a placeholder for goal 2 would go",
      shortGoal: "goal2",
      deadline: "2025-5-23",
      subtasks: [
        { subtaskName: "goal 2", subtaskImage: "border-purple-400 border-2" },
      ],
      checkpoints: [],
    },
  ];

  function showPopup(refToUse: any) {
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

  function handleDateChange(day: number, month: number) {
    let tempDate = new Date(currentDate);
    tempDate.setMonth(month);
    tempDate.setDate(day);
    setCurrentDate(new Date(tempDate));
  }

  //TODO: fix variable names
  function handleGoalSubmit(goal: goalObject) {
    testGoalList.push(goal);
    let leGoal: any = {};
    const dateString = currentDate.toDateString();
    leGoal[dateString] = false;
    localStorage.setItem(goal.fullGoal, JSON.stringify(leGoal));
    setCurrentGoal(testGoalList[testGoalList.length - 1]);
  }

  function handleTaskSwitch() {
    if (localStorage.getItem(currentGoal.fullGoal)) {
      const currentTasks: string = localStorage.getItem(currentGoal.fullGoal)!;
      let changeTask = JSON.parse(currentTasks);
      changeTask[currentDate.toDateString()] =
        !changeTask[currentDate.toDateString()];
      localStorage.setItem(currentGoal.fullGoal, JSON.stringify(changeTask));
    } else {
      console.log("failure");
    }
  }

  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [currentWeek, setCurrentWeek] = useState<any>(getCurrentWeek());
  const [currentGoal, setCurrentGoal] = useState<goalObject>(testGoalList[0]);
  const goalPopupRef = useRef<HTMLDialogElement | null>(null);
  const calendarPopupRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DefaultPage>
      <div class="flex flex-col sm:w-full md:max-h-screen w-max-[800px] items-center gap-3">
        <div class="flex flex-row self-end gap-4 py-4 px-4">
          <div>
            <p>{monthConverter(currentDate.getMonth())}</p>
            <p>{currentDate.getFullYear()}</p>
          </div>
          <button onClick={() => showPopup(calendarPopupRef)}>
            Open Calendar
          </button>
          <select onChange={(e: any) => handleGoalChange(e)}>
            {testGoalList.map((goal, key) => {
              return <option value={key}>{goal.shortGoal}</option>;
            })}
          </select>
          <button onClick={() => showPopup(goalPopupRef)}>+</button>
          <div class="h-10 w-10 bg-purple-300 rounded-full"></div>
        </div>
        <div class="flex flex-row w-full px-10 justify-center items-center">
          <div class="flex flex-row gap-4">
            <button
              onClick={() =>
                setCurrentWeek(getPreviousWeek(currentDate, setCurrentDate))
              }
            >
              {"<"}
            </button>
            {currentWeek.map((day: any, index: number) => {
              const completionStyles = `${weekdayConverter(index) + " " + monthConverter(day.month) + " " + (day.day >= 10 ? day.day : "0" + day.day) + " " + day.year}`;
              console.log(completionStyles);
              let isComplete = false;
              const checkComplete: any = localStorage.getItem(
                currentGoal.fullGoal,
              );
              if (JSON.parse(checkComplete)[completionStyles]) {
                isComplete = true;
              }
              return (
                <div class="flex flex-col gap-1">
                  <button
                    class={`relative rounded-full h-10 w-10 border-2 ${isComplete ? "border-green-400" : "border-black"} flex justify-center items-center after:absolute after:bg-yellow after:w-10 after:h-10 after:bottom-0 after:left-0 transition-all duration-1000`}
                    onClick={() => handleDateChange(day.day, day.month)}
                  >
                    {day.day}
                  </button>
                  {day.day === currentDate.getDate() && (
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
        </div>
        <div>d</div>
        <div>
          <h1 class="text-center animate-fade-in">"{currentGoal.fullGoal}"</h1>
        </div>
        <ul>
          {currentGoal.subtasks.map((subtask) => {
            // console.log(completionStyles);
            let isComplete = false;
            const checkComplete: any = localStorage.getItem(
              currentGoal.fullGoal,
            );
            if (JSON.parse(checkComplete)[currentDate.toDateString()]) {
              console.log(JSON.parse(checkComplete));
              isComplete = true;
            }
            return (
              <li>
                <div
                  class={`h-10 w-10 rounded-full ${isComplete ? "bg-green-400" : subtask.subtaskImage} cursor-pointer transition-all duration-1000`}
                  onClick={() => handleTaskSwitch()}
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
