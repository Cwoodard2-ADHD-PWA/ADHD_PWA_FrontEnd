export default function monthConverter(month: string, day: string): string {
  let monthToReturn = "";
  switch (month) {
    case "01":
      monthToReturn = "Jan";
      break;
    case "02":
      monthToReturn = "Feb";
      break;
    case "03":
      monthToReturn = "Mar";
      break;
    case "04":
      monthToReturn = "Apr";
      break;
    case "05":
      monthToReturn = "May";
      break;
    case "06":
      monthToReturn = "June";
      break;
    case "07":
      monthToReturn = "July";
      break;
    case "08":
      monthToReturn = "Aug";
      break;
    case "09":
      monthToReturn = "Sep";
      break;
    case "10":
      monthToReturn = "Oct";
      break;
    case "11":
      monthToReturn = "Nov";
      break;
    case "12":
      monthToReturn = "Dec";
      break;
    default:
      break;
  }

  return monthToReturn + " " + day;
}
