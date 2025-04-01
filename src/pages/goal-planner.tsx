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

  let currentDate = new Date();
  const [currentDay, setCurrentDay] = useState<number>(currentDate.getDate());
  const [currentWeek, setCurrentWeek] = useState<any>(getCurrentWeek());
  const goalPopupRef = useRef<HTMLDialogElement | null>(null);
  const calendarPopupRef = useRef<HTMLDialogElement | null>(null);

  return (
    <DefaultPage>
      <div class="flex flex-col sm:w-full md:max-h-screen w-max-[800px] items-center gap-3">
        <div class="flex flex-row self-end gap-4 py-4 px-4">
          <select>
            <option>First Goal</option>
            <option>second Goal</option>
          </select>
          <button onClick={() => showPopup(goalPopupRef)}>+</button>
          <div class="h-10 w-10 bg-purple-300 rounded-full"></div>
        </div>
        <div class="flex flex-row self-start w-full px-10 justify-between items-center">
          <div>
            <p>{monthConverter(new Date().getMonth())}</p>
            <p>{new Date().getFullYear()}</p>
          </div>
          <div class="flex flex-row gap-4">
            <button
              onClick={() => setCurrentWeek(getPreviousWeek(currentWeek[0]))}
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
            <button onClick={() => setCurrentWeek(getNextWeek(currentWeek[0]))}>
              {">"}
            </button>
          </div>
          <button onClick={() => showPopup(calendarPopupRef)}>
            Open Calendar
          </button>
        </div>
        <div>
          <h1 class="text-center">
            "Placeholder text until it starts getting filled in with goals"
          </h1>
        </div>
        <div>
          <div class="w-10 h-10 bg-green-400 rounded-full"></div>
          <h2>Task</h2>
        </div>
        <AddGoalPopup popupRef={goalPopupRef} closeDialog={hidePopup} />
        <Calendar popupRef={calendarPopupRef} closeDialog={hidePopup} />
      </div>
    </DefaultPage>
  );
}
