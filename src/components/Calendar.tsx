import weekdayConverter from "../helper-functions/weekday-converter";
export default function Calendar(props: any) {
  let calendar = [];
  let currentDate = new Date();
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
    <dialog ref={props.popupRef}>
      <div class="grid grid-cols-7">
        <div>{weekdayConverter(0)}</div>
        <div>{weekdayConverter(1)}</div>
        <div>{weekdayConverter(2)}</div>
        <div>{weekdayConverter(3)}</div>
        <div>{weekdayConverter(4)}</div>
        <div>{weekdayConverter(5)}</div>
        <div>{weekdayConverter(6)}</div>
        {calendar.map((month: any) => {
          return (
            <div
              class={`w-10 h-10 p-1 border ${month.month === currentDate.getMonth() ? "border-black text-black" : "border-gray-400 text-gray-400"}`}
            >
              <p>{month.day}</p>
            </div>
          );
        })}
      </div>
    </dialog>
  );
}
