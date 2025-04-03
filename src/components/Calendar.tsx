import weekdayConverter from "../helper-functions/weekday-converter";
export default function Calendar(props: any) {
  let calendar = [];
  let currentDate = new Date(props.viewedDate);
  currentDate.setDate(1);
  console.log(currentDate);
  let month = currentDate.getMonth();
  let day = currentDate.getDate();
  let dayOfWeek = currentDate.getDay();

  currentDate.setDate(currentDate.getDate() - dayOfWeek);

  for (let i = 0; i < 42; i++) {
    calendar.push({
      day: currentDate.getDate(),
      dayOfWeek: currentDate.getDay(),
      month: currentDate.getMonth(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  currentDate.setMonth(month);
  currentDate.setDate(day);
  return (
    <dialog ref={props.popupRef} class="rounded-lg p-4">
      <div class="grid grid-cols-7">
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(0)}
        </div>
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(1)}
        </div>
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(2)}
        </div>
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(3)}
        </div>
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(4)}
        </div>
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(5)}
        </div>
        <div class="text-center border-b-2 border-black">
          {weekdayConverter(6)}
        </div>
        {calendar.map((month: any) => {
          return (
            <div
              class={`w-10 h-10 p-1 border text-center ${month.month === currentDate.getMonth() ? "text-black" : "text-gray-400"} ${month.day === currentDate.getDate() && month.month === currentDate.getMonth() ? "bg-yellow-300" : "bg-none"} border-none rounded-full flex items-center justify-center m-1 hover:bg-gray-400`}
            >
              <button class={`hover:bg-gray-400`}>{month.day}</button>
            </div>
          );
        })}
      </div>
    </dialog>
  );
}
