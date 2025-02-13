import { useLocation } from "preact-iso";
import { useState } from "preact/hooks";
import documentTitle from "../helper-functions/document-title";
import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";

export default function recipe() {
  documentTitle("recipe");

  const [isEditing, SetIsEditing] = useState(false);

  return (
    <DefaultPage>
      <GeneralPageWrapper>
        <div class="flex flex-col">
          <div>
            <img alt="food" />
            <h1>Recipe Name</h1>
          </div>
          <div class="grid grid-cols-2">
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
            <div>
              <ol>
                <li></li>
              </ol>
            </div>
          </div>
        </div>
      </GeneralPageWrapper>
    </DefaultPage>
  );
}
