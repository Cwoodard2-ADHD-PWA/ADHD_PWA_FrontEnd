export default function MealCard() {
  return (
    <div class="flex flex-col border border-black p-2 rounded-lg w-1/3">
      <div class="flex flex-row">
        <img alt="" />
        <p>
          <strong>Recipe Name</strong>
        </p>
      </div>
      <div class="flex flex-row">
        <p>Cook Time: {"10 min"}</p>
        <p class="ml-auto">Servings: {"1"}</p>
      </div>
      <a href={"1"}>
        <button>Check sub route</button>
      </a>
    </div>
  );
}
