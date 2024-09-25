export default function AddFormSubtask(props: any) {
  return (
    <>
      <div
        class={`flex flex-row gap-2 min-w-80 md:min-w-96 max-w-2xl p-1 border-2 border-gray-200 rounded-lg justify-items-center self-start ${props.subtask.isComplete && "opacity-50"} transition-all duration-500`}
      >
        <div class={`flex flex-row gap-3 items-center`}>
          <p>{props.subtask.task}</p>
        </div>
        {/* <p>{props.todo.deadline}</p> */}
        <div class="flex flex-row ml-auto gap-3 items-center">
          <button
            type="button"
            disabled={props.subtask.isComplete}
            onClick={() => props.removeSubtask(props.subtask.task)}
            class="bg-gray-200 py-2 px-3 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
