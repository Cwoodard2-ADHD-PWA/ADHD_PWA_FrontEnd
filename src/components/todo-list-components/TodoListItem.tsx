export default function TodoListItem(props: any) {
  return (
    <>
      <div class="flex flex-row gap-2">
        <div class="flex flex-row">
          <button onClick={() => props.completeTask(props.todo)}>
            Complete
          </button>
          <p>{props.todo.task}</p>
        </div>
        {/* <p>{props.todo.deadline}</p> */}
        <div class="flex flex-row">
          <p class={"ml-auto"}>{props.todo.time}</p>
          <button onClick={() => props.enableEditing(props.todo)}>Edit</button>
        </div>
      </div>
    </>
  );
}
