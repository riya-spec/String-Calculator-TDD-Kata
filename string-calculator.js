function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    const numList = numbers.replace(/\n/g, ',').split(','); // Replace newline with comma and split
  
    return numList.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  