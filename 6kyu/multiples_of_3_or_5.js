// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.

//The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in.

const solution = (number) => {

  const allNums = [];

  for (i = 1; i < number; i++) {
    allNums.push(i);
  }

  const filtered = allNums.filter(val => val % 3 === 0 || val % 5 === 0);

  return filtered.reduce((acc, currVal) => acc + currVal, 0);

  };