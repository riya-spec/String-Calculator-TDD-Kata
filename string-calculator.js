function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ',';
    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n', 2);
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }
  
    const numList = numbers.replace(/\n/g, delimiter).split(delimiter);
  
    const negatives = [];
    const sum = numList.reduce((sum, num) => {
      const n = parseInt(num, 10);
      if (n < 0) {
        negatives.push(n);
      }
      return sum + n;
    }, 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return sum;
  }
  