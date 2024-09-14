import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import documentTitle from "../helper-functions/document-title";

export default function WeeklyPlanner() {
  documentTitle("Weekly Planner");
  return (
    <DefaultPage>
      <GeneralPageWrapper>
        <div>
          <p>This is some text</p>
        </div>
      </GeneralPageWrapper>
    </DefaultPage>
  );
}
