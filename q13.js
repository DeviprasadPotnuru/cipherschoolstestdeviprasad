function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(getEvenNumbers(numbers));
  // Output is [2, 4, 6]
  
