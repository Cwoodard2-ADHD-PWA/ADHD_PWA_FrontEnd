import testImage from "../../assets/testing-images/test_image.png";
import forkIcon from "../../assets/icons/Fork_Icon.png";

export default function MealCard(props: any) {
  return (
    <div class="flex flex-col border border-black rounded-lg">
      <img alt="" src={testImage} class="rounded-t-md w-full object-cover" />
      <div class="p-2">
        <p>
          <strong>{props.recipeName}</strong>
        </p>
        <hr></hr>
        <div class="flex flex-row">
          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <circle
                style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                cx="25"
                cy="25"
                r="22"
              />
              <circle cx="25" cy="25" r="3" />
              <polyline
                style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                points="30,34 25,25 37,12 "
              />
            </svg>
            <p>{"10 min"}</p>
          </div>
          <div class="flex flex-row">
            <img src={forkIcon} />
            <p class="ml-auto">{"1"}</p>
          </div>
        </div>
        <a href={`/recipes/${props.recipeName}`}>
          <button class="bg-blue-400 rounded-full px-4 py-1 text-white">
            View
          </button>
        </a>
      </div>
    </div>
  );
}
