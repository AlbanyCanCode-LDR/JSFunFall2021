let monthNum = "10"; // e.g.

/**
 * You are going to convert a month in its number form (e.g. 1 or "01")
 * into the month as text.
 * "monthNum" represents the given month as a number.
 * Create a variable called "monthText".
 * It should convert "monthNum" into the month as text.
 * If you cannot convert "monthNum" into text, than "monthNum" should be null.
 *
 * @example
 * If "monthNum" is "03", then "monthText" should be "March".
 * If "monthNum" is "12", then "monthText" should be "December".
 * If "monthNum" equals anything else, then "monthText" should be null.
 *
 * You must use a switch statement to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let monthText;

switch (monthNum) {
  case "01": //"01" ect..
    monthText = "January";
    break;
  case "02": //"01" ect..
    monthText = "February";
    break;
  case "03": //"01" ect..
    monthText = "March";
    break;
  case "04": //"01" ect..
    monthText = "April";
    break;
  case "05": //"01" ect..
    monthText = "May";
    break;
  case "06": //"01" ect..
    monthText = "June";
    break;
  case "07": //"01" ect..
    monthText = "July";
    break;
  case "08": //"01" ect..
    monthText = "August";
    break;
  case "09": //"01" ect..
    monthText = "September";
    break;
  case "10": //"01" ect..
    monthText = "October";
    break;
  case "11": //"01" ect..
    monthText = "November";
    break;
  case "12": //"01" ect..
    monthText = "December";
    break;
  default:
    monthText = null;
}
