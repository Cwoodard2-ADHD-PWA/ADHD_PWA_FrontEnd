import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import documentTitle from "../helper-functions/document-title";
import weekdayConverter from "../helper-functions/weekday-converter";

export default function GoalPlanner() {
  documentTitle("Goal Planner");

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

  //  {<div class="grid grid-cols-7">
  //             <div>
  //                 {weekdayConverter(0)}
  //             </div>
  //             <div>
  //             {weekdayConverter(1)}
  //             </div>
  //             <div>
  //             {weekdayConverter(2)}
  //             </div>
  //             <div>
  //             {weekdayConverter(3)}
  //             </div>
  //             <div>
  //             {weekdayConverter(4)}
  //             </div>
  //             <div>
  //             {weekdayConverter(5)}
  //             </div>
  //             <div>
  //             {weekdayConverter(6)}
  //             </div>
  //           {calendar.map((month: any) => {
  //             return (
  //                 <div class="w-10 h-10 p-1 border border-black">
  //                     <p>
  //                         {month.day}
  //                     </p>
  //                 </div>
  //             );
  //           })}
  //         </div>}

  return (
    <DefaultPage>
      <GeneralPageWrapper>
        {
          <div class="grid grid-cols-7">
            <div>{weekdayConverter(0)}</div>
            <div>{weekdayConverter(1)}</div>
            <div>{weekdayConverter(2)}</div>
            <div>{weekdayConverter(3)}</div>
            <div>{weekdayConverter(4)}</div>
            <div>{weekdayConverter(5)}</div>
            <div>{weekdayConverter(6)}</div>
            {calendar.map((month: any) => {
              return (
                <div class="w-10 h-10 p-1 border border-black">
                  <p>{month.day}</p>
                </div>
              );
            })}
          </div>
        }
      </GeneralPageWrapper>
    </DefaultPage>
  );
}
