export function getCurrentWeek() {
  let currentDate = new Date();
  //   currentDate.setDate(1);
  console.log(currentDate);
  //   let month = currentDate.getMonth();
  //   let day = currentDate.getDate();
  let dayOfWeek = currentDate.getDay();

  currentDate.setDate(currentDate.getDate() - dayOfWeek);
  let weekStart = currentDate.getDate();
  // console.log(currentDate.setDate(currentDate.getDate() + 6));
  // let weekEnd = currentDate.getDate();

  // console.log([weekEnd, weekStart]);

  let currentWeek = [];

  for (let i = 0; i < 7; i++) {
    currentWeek.push({
      day: currentDate.getDate(),
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log(currentWeek);
  return currentWeek;
}

export function getNextWeek(currentDate: any, setDate: any) {
  console.log(currentDate);
  let currentWeek = [];
  console.log(currentDate);

  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  currentDate.setDate(currentDate.getDate() + 7);
  setDate(new Date(currentDate));

  for (let i = 0; i < 7; i++) {
    currentWeek.push({
      day: currentDate.getDate(),
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log(currentWeek);
  return currentWeek;
}

export function getPreviousWeek(currentDate: any, setDate: any) {
  let currentWeek = [];

  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  currentDate.setDate(currentDate.getDate() - 7);
  setDate(new Date(currentDate));

  for (let i = 0; i < 7; i++) {
    currentWeek.push({
      day: currentDate.getDate(),
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
    });
    currentDate.setDate(currentDate.getDate() + 1);
    console.log(currentDate.getDate());
  }

  return currentWeek;
}
