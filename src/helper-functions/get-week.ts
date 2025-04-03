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
    currentWeek.push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log(currentWeek);
  return currentWeek;
}

export function getNextWeek(currentDate: any, setDate: any) {
  console.log(currentDate);
  let currentWeek = [];
  //   let nextSunday = new Date(currentDate);
  //   console.log(nextSunday);
  //   console.log(weekStart);
  //   currentDate.setDate(weekStart);
  console.log(currentDate);

  currentDate.setDate(currentDate.getDate() - currentDate.getDay());
  console.log(
    currentDate.getMonth() +
      " " +
      currentDate.getDate() +
      " " +
      currentDate.getDay(),
  );

  currentDate.setDate(currentDate.getDate() + 7);
  //   console.log(currentDate.getMonth() + " " + currentDate.getDate() + " " + currentDate.getDay());
  //   console.log(currentDate);
  //   console.log(currentDate.getDate());
  setDate(new Date(currentDate));

  for (let i = 0; i < 7; i++) {
    currentWeek.push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
    //   console.log(currentDate.getDate());
    //   let day = new Date(currentDate);
    //   console.log(currentDate.getDate());
    //   currentWeek.push(currentDate.getDate());
  }

  //   console.log(currentWeek);
  return currentWeek;
}

export function getPreviousWeek(currentDate: any, setDate: any) {
  let currentWeek = [];
  //   let currentDate = new Date();
  //   currentDate.setDate(weekStart);
  console.log(currentDate);

  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  currentDate.setDate(currentDate.getDate() - 7);
  setDate(new Date(currentDate));
  console.log(currentDate);

  for (let i = 0; i < 7; i++) {
    currentWeek.push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
    console.log(currentDate.getDate());
    //   console.log(currentDate.getDate());
    //   let day = new Date(currentDate);
    //   console.log(currentDate.getDate());
    //   currentWeek.push(currentDate.getDate());
  }
  console.log(currentDate);
  console.log(currentWeek);
  return currentWeek;
}
