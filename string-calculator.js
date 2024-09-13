function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ',';
    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n', 2);
      delimiter = parts[0].substring(2); // Extract custom delimiter
      numbers = parts[1]; // Update numbers to exclude the delimiter line
    }
  
    const numList = numbers.replace(/\n/g, delimiter).split(delimiter); // Replace newline and split by delimiter
  
    return numList.reduce((sum, num) => sum + parseInt(num, 10), 0);
  }
  