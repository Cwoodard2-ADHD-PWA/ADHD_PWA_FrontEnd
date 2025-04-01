export default function monthConverter(month: number): string {
  let monthToReturn = "";
  switch (month) {
    case 0:
      monthToReturn = "Jan";
      break;
    case 1:
      monthToReturn = "Feb";
      break;
    case 2:
      monthToReturn = "Mar";
      break;
    case 3:
      monthToReturn = "Apr";
      break;
    case 4:
      monthToReturn = "May";
      break;
    case 5:
      monthToReturn = "June";
      break;
    case 6:
      monthToReturn = "July";
      break;
    case 7:
      monthToReturn = "Aug";
      break;
    case 8:
      monthToReturn = "Sep";
      break;
    case 9:
      monthToReturn = "Oct";
      break;
    case 10:
      monthToReturn = "Nov";
      break;
    case 11:
      monthToReturn = "Dec";
      break;
    default:
      break;
  }

  return monthToReturn;
}
