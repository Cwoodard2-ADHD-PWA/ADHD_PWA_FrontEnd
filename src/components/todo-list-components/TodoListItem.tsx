export default function TodoListItem(props: any) {
  return (
    <>
      {/* //TODO: Add functionality that results in being able to view subtasks and notes */}
      <div
        class={`flex flex-row gap-2 min-w-80 md:min-w-96 max-w-2xl p-1 border-2 border-gray-200 rounded-lg justify-items-center self-start ${props.todo.complete && "opacity-50"} transition-all duration-500`}
      >
        <div class={`flex flex-row gap-3 items-center`}>
          {/* <button class="rounded-full border-black border" onClick={() => props.completeTask(props.todo)}>
                {props.todo.complete ? "✓" : "Complete"}
            </button> */}
          <label for="complete" hidden>
            Complete
          </label>
          <input
            id="complete"
            name="complete"
            type="checkbox"
            onClick={(e) => props.completeTask(e, props.todo)}
            class={`appearance-none relative w-4 h-4 border border-black rounded-full checked:border-green-600 checked:bg-green-600 before:visible before:content['_k'] before:absolute before:top-0 before:left-0 cursor-pointer`}
          ></input>
          <p class={`${props.todo.complete && "line-through"}`}>
            {props.todo.task}
          </p>
        </div>
        {/* <p>{props.todo.deadline}</p> */}
        <div class="flex flex-row ml-auto gap-3 items-center">
          {props.todo.time && (
            <p class="rounded-md p-2 bg-gray-200">{props.todo.time}</p>
          )}
          <button
            disabled={props.todo.complete}
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
