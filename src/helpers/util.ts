export function calculateAgeDifference(inputDate: string) {
  const inputDateObj = new Date(inputDate);
  const currentDateObj = new Date();

  const inputDay = inputDateObj.getDate();
  const inputMonth = inputDateObj.getMonth() + 1;
  const inputYear = inputDateObj.getFullYear();

  const currentDay = currentDateObj.getDate();
  const currentMonth = currentDateObj.getMonth() + 1;
  const currentYear = currentDateObj.getFullYear();

  let yearsDifference = currentYear - inputYear;
  let monthsDifference = currentMonth - inputMonth;
  let daysDifference = currentDay - inputDay;

  if (daysDifference < 0) {
    monthsDifference--;
    const lastDayOfPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    daysDifference += lastDayOfPreviousMonth;
  }
  if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
  }

  return {
    years: yearsDifference,
    months: monthsDifference < 10 ? `0${monthsDifference}` : monthsDifference,
    days: daysDifference < 10 ? `0${daysDifference}` : daysDifference,
  };
}
