export default function weekdayConverter(dayOfWeek: number): string {
  let dayToReturn = "";
  switch (dayOfWeek) {
    case 0:
      dayToReturn = "Sun";
      break;
    case 1:
      dayToReturn = "Mon";
      break;
    case 2:
      dayToReturn = "Tue";
      break;
    case 3:
      dayToReturn = "Wed";
      break;
    case 4:
      dayToReturn = "Thu";
      break;
    case 5:
      dayToReturn = "Fri";
      break;
    case 6:
      dayToReturn = "Sat";
      break;
    default:
      break;
  }

  return dayToReturn;
}
