function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    const numList = numbers.split(','); // Split by comma
  
    return numList.reduce((sum, num) => sum + parseInt(num, 10), 0); // Sum all numbers
  }
  