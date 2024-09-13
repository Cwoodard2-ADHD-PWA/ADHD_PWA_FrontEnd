import home from "../assets/navigation-images/Home-Icon.svg";
import list from "../assets/navigation-images/List-Alt-Icon.svg";

export default function Navigation() {
  return (
    <>
      <div class="sticky bottom-0 left-0 md:top-0 md:left-0 md:w-80 md:m-0 bg-gray-200 md:rounded-r-lg">
        <p>{document.title}</p>
        <nav class="flex flex-row md:flex-col border-t-2 md:border-t-0 md:min-h-screen p-4 justify-evenly md:justify-normal">
          <a
            href="/dashboard"
            class="flex flex-row gap-3 hover:bg-gray-300 p-1 rounded-md"
          >
            <img src={home} alt="home icon" class="text-black" />
            Home
          </a>
          <a
            href="/todo-list"
            class="flex flex-row gap-3 hover:bg-gray-300 p-1 rounded-md"
          >
            <img src={list} alt="home icon" />
            Todo
          </a>
          <a
            href="/weekly-planner"
            class="flex flex-row gap-3 hover:bg-gray-300 p-1 rounded-md"
          >
            <img src={list} alt="home icon" />
            Weekly Planner
          </a>
        </nav>
      </div>
    </>
  );
}
