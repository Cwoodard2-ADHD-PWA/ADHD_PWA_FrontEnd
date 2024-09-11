export default function Navigation() {
  return (
    <>
      <div class="sticky w-full bottom-0 left-0 md:top-0 md:left-0 md:w-20 md:m-0">
        <nav class="flex flex-row md:flex-col border-t-2 md:border-t-0 md:border-r-2 border-black md:min-h-screen p-4 justify-evenly md:justify-normal">
          <a href="/">Home</a>
          <a href="/todo-list">Todo</a>
        </nav>
      </div>
    </>
  );
}
