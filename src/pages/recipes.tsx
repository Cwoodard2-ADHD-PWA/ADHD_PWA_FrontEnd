import GeneralPageWrapper from "../components/layout-components/GeneralPageWrapper";
import DefaultPage from "../components/layout-components/DefaultPage";
import MealCard from "../components/meal-planner-components/MealCard";
export default function Recipes() {
  const testList = ["Noodles", "Potatoes", "Chips"];

  return (
    <DefaultPage>
      <GeneralPageWrapper>
        <div>
          <div class="flex flex-row">
            <h1>Recipes</h1>
            <button class="ml-auto">Add Recipe</button>
          </div>
          <ul class="grid grid-cols-3 gap-3">
            {testList.map((recipe: string) => {
              return (
                <li>
                  <MealCard recipeName={recipe} />
                </li>
              );
            })}
          </ul>
        </div>
      </GeneralPageWrapper>
    </DefaultPage>
  );
}
