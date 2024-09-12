import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import PWABadge from "../PWABadge";
import documentTitle from "../helper-functions/document-title";
import { useLocation } from "preact-iso";
export default function Homepage() {
  documentTitle("Home");
  const location = useLocation();

  function handleLogout() {
    // Do backend stuff
    location.route("/");
  }

  return (
    <>
      <DefaultPage>
        <GeneralPageWrapper>
          <h1>Hello Cameron</h1>
          <PWABadge />
          <button onClick={() => handleLogout()}>Logout</button>
        </GeneralPageWrapper>
      </DefaultPage>
    </>
  );
}
