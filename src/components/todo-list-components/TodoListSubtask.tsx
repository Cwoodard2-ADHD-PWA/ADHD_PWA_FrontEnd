export default function TodoListSubtask(props: any) {
  return (
    <>
      <div
        class={`flex flex-row gap-2 min-w-80 md:min-w-96 max-w-2xl p-1 border-2 border-gray-200 rounded-lg justify-items-center self-start ${props.subtask.isComplete && "opacity-50"} transition-all duration-500`}
      >
        <div class={`flex flex-row gap-3 items-center`}>
          <label for="complete" hidden>
            Complete
          </label>
          <input
            id="complete"
            name="complete"
            type="checkbox"
            // onClick={(e) => props.completeSubtask(e, props.subtask)}
            class={`appearance-none relative w-4 h-4 border border-black rounded-full checked:border-green-600 checked:bg-green-600 before:visible before:content['_k'] before:absolute before:top-0 before:left-0 cursor-pointer`}
          ></input>
          <p class={`${props.subtask.isComplete && "line-through"}`}>
            {props.subtask.task}
          </p>
        </div>
        {/* <p>{props.todo.deadline}</p> */}
        <div class="flex flex-row ml-auto gap-3 items-center">
          <button
            disabled={props.subtask.isComplete}
            // onClick={() => props.deleteSubtask(props.subtask)}
            class="bg-gray-200 py-2 px-3 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
