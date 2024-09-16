export default function Navigation() {
  return (
    <>
      <div class="sticky bottom-0 left-0 md:top-0 md:left-0 md:w-80 md:m-0 bg-gray-200 md:rounded-r-lg">
        <nav class="flex flex-row md:flex-col border-t-2 md:border-t-0 md:min-h-screen p-4 justify-evenly md:justify-normal md:gap-2">
          <p class="hidden md:block">{document.title}</p>
          <a
            href="/dashboard"
            class={`flex flex-row gap-3 hover:bg-gray-300 p-1 md:rounded-md ${document.title == "Home" ? "border-b-white border-b-2 md:border-l-white md:border-b-0 md:border-l-2" : ""}`}
          >
            {/* <img src={home} alt="home icon" class="text-black" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
              alt="home icon"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            <p class="hidden md:block">Home</p>
          </a>
          <a
            href="/todo-list"
            class={`flex flex-row gap-3 hover:bg-gray-300 p-1 md:rounded-md ${document.title == "Todo List" ? "border-b-white border-b-2 md:border-l-white md:border-b-0 md:border-l-2" : ""}`}
          >
            {/* <img src={list} alt="home icon" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
              alt="todo list"
            >
              <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
            <p class="hidden md:block">Todo</p>
          </a>
          <a
            href="/weekly-planner"
            class={`flex flex-row gap-3 hover:bg-gray-300 p-1 md:rounded-md ${document.title == "Weekly Planner" ? "border-b-white border-b-2 md:border-l-white md:border-b-0 md:border-l-2" : ""}`}
          >
            {/* <img src={list} alt="home icon" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
              alt="planner"
            >
              <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
            </svg>
            <p class="hidden md:block">Weekly Planner</p>
          </a>
        </nav>
      </div>
    </>
  );
}
