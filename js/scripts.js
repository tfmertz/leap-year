function leapYear(year) {
  return (year % 4 === 0) && (year % 100 != 0);
}