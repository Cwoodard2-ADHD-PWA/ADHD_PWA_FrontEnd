export default function RightSideBar() {
  // TODO: Add ability to put in Headings and lists within those Headings
  return (
    <div class="sticky hidden md:flex md:top-0 md:right-0 md:w-80 md:m-0 bg-gray-200 md:rounded-r-lg md:min-h-screen flex-col">
      <ul>
        <li>
          <button>Today</button>
        </li>
        <li>
          <button>Upcoming</button>
        </li>
      </ul>
    </div>
  );
}
