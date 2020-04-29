/**
 * @param {{ year: number; month: number; day: number; }} date_obj
 * @return {string}
 */
export function calculateExperience(date_obj) {
  // Get the current date
  let currentDate = new Date();
  let now = {
    day: currentDate.getUTCDate(),
    year: currentDate.getUTCFullYear(),
    month: currentDate.getUTCMonth() + 1  // month is zero-based
  };

  // Calculate the years of exp
  let diff = now.year % date_obj.year;

  // If the current month is less than the given month OR
  // the current month is the same as the given month AND
  // the current dat is less than the given day,
  // the year exp is one year too many, so we need to correct it
  if (now.month < date_obj.month || (now.month === date_obj.month && now.day < date_obj.day)) {
    diff -= 1
  }
  return diff.toString();
}
