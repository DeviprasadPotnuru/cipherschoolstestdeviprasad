function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isLeapYear(2020));   // Output is true
  console.log(isLeapYear(1700));   // Output is false