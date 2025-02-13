import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import weekdayConverter from "../helper-functions/weekday-converter";
import MealDay from "../components/meal-planner-components/MealDay";
import documentTitle from "../helper-functions/document-title";
import { useState } from "preact/hooks";
import monthConverter from "../helper-functions/month-converter";

export default function MealPlanner() {
  documentTitle("Meal Planner");

  const [mealList, SetMealList] = useState();

  let currentDate = new Date();
  console.log(currentDate);
  let month = currentDate.getMonth();
  let day = currentDate.getDate();
  let dayOfWeek = currentDate.getDay();

  currentDate.setDate(currentDate.getDate() - dayOfWeek);
  let weekStart = currentDate.getDate();
  let weekEnd = currentDate.getDate() + 6;

  console.log([weekEnd, weekStart]);

  let calendar = [];

  for (let i = 0; i < 35; i++) {
    calendar.push({
      day: currentDate.getDate(),
      dayOfWeek: currentDate.getDay(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  currentDate.setDate(day);

  console.log(calendar);
  // function createCalendar() {
  //   let builtCalendar;
  //   let date = new Date();
  //   let month = date.getMonth();
  //   let day = date.getDay();
  //   let daysInMonth = date.getDate();

  //   for (let i = 1; i <= daysInMonth; i++) {

  //   }
  // }

  return (
    <DefaultPage>
      <GeneralPageWrapper>
        {/* <div class="grid grid-cols-7">
            <div>
                {weekdayConverter(0)}
            </div>
            <div>
            {weekdayConverter(1)}
            </div>
            <div>
            {weekdayConverter(2)}
            </div>
            <div>
            {weekdayConverter(3)}
            </div>
            <div>
            {weekdayConverter(4)}
            </div>
            <div>
            {weekdayConverter(5)}
            </div>
            <div>
            {weekdayConverter(6)}
            </div>
          {calendar.map((month: any) => {
            return (
                <div class="w-10 h-10 p-1 border border-black">
                    <p>
                        {month.day}
                    </p>
                </div>
            );
          })}
        </div> */}
        <div class="border border-black rounded-lg w-full text-center sticky top-0">
          <p>Feb 2 - Feb 8</p>
        </div>
        <div class="overflow-x-auto flex flex-col justify-between w-full gap-20">
          <div class="">
            {weekdayConverter(0)}
            <MealDay />
          </div>
          <div class="">
            {weekdayConverter(1)}
            <MealDay />
          </div>
          <div class="">
            {weekdayConverter(2)}
            <MealDay />
          </div>
          <div class="">
            {weekdayConverter(3)}
            <MealDay />
          </div>
          <div class="">
            {weekdayConverter(4)}
            <MealDay />
          </div>
          <div class="">
            {weekdayConverter(5)}
            <MealDay />
          </div>
          <div class="">
            {weekdayConverter(6)}
            <MealDay />
          </div>
        </div>
      </GeneralPageWrapper>
    </DefaultPage>
  );
}
