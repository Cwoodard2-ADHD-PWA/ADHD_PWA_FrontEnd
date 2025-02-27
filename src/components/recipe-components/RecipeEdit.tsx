import { useState } from "preact/hooks";

export default function RecipeEdit() {
  const [ingredients, setIngredients] = useState([
    "First Ingredient",
    "second ingredient",
  ]);
  const [steps, setSteps] = useState(["Add Eggs", "Be Cool"]);
  return (
    <form
      class="flex flex-col justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="Recipe Name"></input>
      <input type="text" placeholder="Recipe Description"></input>
      <input type="text" placeholder="Cook Time"></input>
      <div class="grid grid-rows-2">
        <ul class="">
          {ingredients.map((ingredient, key: any) => {
            return (
              <li>
                <input
                  placeholder="ingredient"
                  value={ingredient}
                  type="text"
                  onChange={(e: any) => {
                    setIngredients((prev: any) => {
                      prev[key] = e.target.value;
                      return prev;
                    });
                  }}
                ></input>
              </li>
            );
          })}
          <li>
            <button
              class="bg-blue-400 rounded-full py-2 px-4 text-white"
              onClick={() => setIngredients((prev: any) => [...prev, ""])}
            >
              Add Ingredient
            </button>
          </li>
        </ul>
        <ol>
          {steps.map((step, key: any) => {
            return (
              <li>
                <h3 class="text-3xl font-bold">Step {key + 1}</h3>
                <input
                  placeholder="recipe step"
                  value={step}
                  type="text"
                  onChange={(e: any) => {
                    setSteps((prev: any) => {
                      prev[key] = e.target.value;
                      return prev;
                    });
                  }}
                ></input>
              </li>
            );
          })}
          <li>
            <button
              class="bg-blue-400 rounded-full py-2 px-4 text-white"
              onClick={() => setSteps((prev: any) => [...prev, ""])}
            >
              Add Step
            </button>
          </li>
        </ol>
      </div>
    </form>
  );
}
