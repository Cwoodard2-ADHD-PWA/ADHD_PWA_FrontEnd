import ListSideBarItems from "./ListSideBarItems";
export default function RightSideBar(props: any) {
  // TODO: Add ability to put in Headings and lists within those Headings
  return (
    <div class="sticky hidden md:flex md:top-0 md:right-0 md:w-80 md:m-0 bg-gray-200 md:rounded-l-lg md:min-h-screen flex-col p-4">
      <ul class="flex flex-row md:flex-col border-t-2 md:border-t-0 md:min-h-screen p-4 items-end justify-evenly md:justify-normal md:gap-2">
        <ListSideBarItems list="today" changeTodoList={props.changeTodoList} />
        <ListSideBarItems
          list="upcoming"
          changeTodoList={props.changeTodoList}
        />
        <ListSideBarItems
          list="completed"
          changeTodoList={props.changeTodoList}
        />
        <button class="rounded-full p-1 border border-black w-full">+</button>
      </ul>
    </div>
  );
}
