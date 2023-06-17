function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    
    const sum = numbers.reduce((total, number) => total + number, 0);
    return sum / numbers.length;
  }
  const avg = calculateAverage([12, 13, 14, 15]);
  console.log(avg); //output is 13.5
  