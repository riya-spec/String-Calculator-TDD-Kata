function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    const numList = numbers.split(','); // Split by comma
  
    if (numList.length === 1) {
      return parseInt(numbers, 10); // Return the single number
    }
  
    return parseInt(numList[0], 10) + parseInt(numList[1], 10); // Sum of two numbers
  }
  