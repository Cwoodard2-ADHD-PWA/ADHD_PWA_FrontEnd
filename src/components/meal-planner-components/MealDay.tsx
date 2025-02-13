import MealCard from "./MealCard";

export default function MealDay() {
  return (
    <div class="flex flex-col gap-3">
      <h3>Date</h3>
      <div>
        <h4>
          <strong>Breakfast</strong>
        </h4>
        <div class="flex flex-row justify-between">
          <MealCard />
          <MealCard />
          <MealCard />
        </div>
      </div>
      <div>
        <h4>
          <strong>Lunch</strong>
        </h4>
        <MealCard />
      </div>
      <div>
        <h4>
          <strong>Dinner</strong>
        </h4>
        <MealCard />
      </div>
      <div>
        <h4>
          <strong>Snacks</strong>
        </h4>
        <MealCard />
      </div>
    </div>
  );
}
