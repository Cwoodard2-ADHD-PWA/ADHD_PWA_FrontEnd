import { useRoute } from "preact-iso";
import { useState } from "preact/hooks";
import testImage from "../assets/testing-images/test_image.png";
import heartIcon from "../assets/icons/Heart_Icon_filled.png";
import heartIconFilled from "../assets/icons/Heart_Icon_filled.png";
import documentTitle from "../helper-functions/document-title";
import DefaultPage from "../components/layout-components/DefaultPage";
import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import GroceryList from "../components/meal-planner-components/List";
import RecipeEdit from "../components/recipe-components/RecipeEdit";

export default function recipe() {
  const initialServings = 4;
  const [isEditing, SetIsEditing] = useState(false);
  const [servings, setServings] = useState(initialServings);
  const location = useRoute();

  console.log(location.params);
  documentTitle("recipe");

  return (
    <DefaultPage>
      <>
        <div class="flex flex-col w-full gap-10 md:max-h-screen">
          {/* <div class="w-full rounded-b-full bg-orange-400 h-1/6"> */}
          <img alt="food" class="w-full h-1/6 object-cover" src={testImage} />
          <div class="w-full p-4">
            <h1>{location.params.recipeID}</h1>
            <p>This will be a big long description</p>
            <hr></hr>
            <div class="flex flex-row">
              <div>
                <p>30 Minutes</p>
              </div>
              <div class="ml-auto flex flex-row gap-3">
                <button>
                  <img src={heartIcon} alt="unfilled heart" />
                </button>
                <button onClick={() => SetIsEditing((prev) => !prev)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                  >
                    <g id="Rounded">
                      <polygon points="14.5,5.5 3,17 3,21 7,21 18.5,9.5 " />
                      <path d="M21.172,2.828c-1.105-1.105-2.895-1.105-4,0L16,4l4,4l1.172-1.172C22.276,5.724,22.276,3.933,21.172,2.828z" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
          {isEditing ? (
            <RecipeEdit />
          ) : (
            <div class="flex flex-row justify-between p-4">
              <div>
                <h2 class="text-2xl">Ingredients</h2>
                <div class="flex gap-2">
                  <select onChange={(e: any) => setServings(e.target.value)}>
                    <option>{initialServings * 0.5}</option>
                    <option>{initialServings}</option>
                    <option>{initialServings * 2}</option>
                  </select>
                  <p>Servings</p>
                </div>
                <ul>
                  <li>{1 * servings} Egg</li>
                  <li>{2 * servings} Tb Sugar</li>
                  <li>{3 * servings} pieces of beef!</li>
                </ul>
              </div>
              <div>
                <h2 class="text-2xl">Instructions</h2>
                <ol class="list-decimal">
                  <li>Take the egg and slowly beat it until it is ready</li>
                </ol>
              </div>
            </div>
          )}
          <GroceryList />
        </div>
      </>
    </DefaultPage>
  );
}
