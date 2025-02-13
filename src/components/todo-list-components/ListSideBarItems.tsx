export default function ListSideBarItems(props: any) {
  return (
    <li
      class={`flex flex-row gap-3 hover:bg-gray-300 p-1 md:rounded-md ${document.title == "Home" ? "border-b-white border-b-2 md:border-l-white md:border-b-0 md:border-l-2" : ""}`}
    >
      <button onClick={() => props.changeTodoList()}>{props.list}</button>
    </li>
  );
}
