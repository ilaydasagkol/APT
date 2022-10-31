function range(start, end, step) {
    startToEnd = [];
    step = (arguments[2] || 1); // If the step argument wasn't passed, set it equal to 1
    if (start <= end) {
        for (i = start; i <= end; i += step) {
        startToEnd.push(i);
      }
    }
    else {
      for (i = start; i >= end; i += step) {
        startToEnd.push(i);
      }
    }
  
    return startToEnd;
  }
  function sum(numbers) {
    total = 0;
    for (i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55