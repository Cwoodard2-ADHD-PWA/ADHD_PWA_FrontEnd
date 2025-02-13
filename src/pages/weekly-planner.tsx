import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import documentTitle from "../helper-functions/document-title";

export default function WeeklyPlanner() {
  documentTitle("Weekly Planner");

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
        <div></div>
      </GeneralPageWrapper>
    </DefaultPage>
  );
}
