function checkEvenOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(checkEvenOdd(10));  // Output is "Even"
  console.log(checkEvenOdd(13));  // Output is"Odd"