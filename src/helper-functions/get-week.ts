export function getCurrentWeek() {
  let currentDate = new Date();
  console.log(currentDate);
  let month = currentDate.getMonth();
  let day = currentDate.getDate();
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

export function getNextWeek(weekStart: number) {
  let currentWeek = [];
  let currentDate = new Date();
  currentDate.setDate(weekStart);
  console.log(currentDate);
  // let month = currentDate.getMonth();
  // let day = currentDate.getDate();
  // let dayOfWeek = currentDate.getDay();

  // currentDate.setDate(currentDate.getDate() - dayOfWeek);

  currentDate.setDate(currentDate.getDate() + 7);
  console.log(currentDate.getDate());

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

export function getPreviousWeek(weekStart: number) {
  let currentWeek = [];
  let currentDate = new Date();
  currentDate.setDate(weekStart);
  console.log(currentDate);
  // let month = currentDate.getMonth();
  // let day = currentDate.getDate();
  // let dayOfWeek = currentDate.getDay();

  // currentDate.setDate(currentDate.getDate() - dayOfWeek);

  currentDate.setDate(currentDate.getDate() - 7);
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
