export default function TodoListItem(props: any) {
  return (
    <>
      <div class="flex flex-row gap-2 min-w-80 max-w-lg p-1 border-2 border-gray-200 rounded-lg justify-items-center self-start">
        <div class="flex flex-row gap-3 items-center">
          <label for="complete" hidden></label>
          <input
            id="complete"
            name="complete"
            type="checkbox"
            onClick={() => props.completeTask(props.todo)}
          ></input>
          <p>{props.todo.task}</p>
        </div>
        {/* <p>{props.todo.deadline}</p> */}
        <div class="flex flex-row ml-auto gap-3 items-center">
          {props.todo.time && (
            <p class="rounded-md p-2 bg-gray-200">{props.todo.time}</p>
          )}
          <button
            onClick={() => props.enableEditing(props.todo)}
            class="bg-gray-200 py-2 px-3 rounded-md"
          >
            ✎
          </button>
        </div>
      </div>
    </>
  );
}
