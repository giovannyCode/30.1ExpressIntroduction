function median(numbers) {
  // Step 1: Sort the array

  const numbersFloat =  numbers.map(num => parseFloat(num));
  console.log(numbersFloat);
  const orderedNums= numbersFloat.sort((a, b) => a - b);

  const length = orderedNums.length;
  console.log("numbers Organized",numbersFloat);
  
  // Step 2: Check if the array length is odd or even
  if (length % 2 === 0) {
    // Step 3: If even, return the average of the two middle elements
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return (orderedNums[midIndex1] + orderedNums[midIndex2]) / 2;
  } else {
    // Step 3: If odd, return the middle element
    const midIndex = Math.floor(length / 2);
    return orderedNums[midIndex];
  }
}

function mean (numbers)
{
  const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0);
  console.log("Total Sum: ",totalSum);
  console.log("Total Sum typeOf: ",typeof(totalSum));
  console.log("lengh Array Type of: ",typeof(numbers.length));
  const mean = totalSum / numbers.length;
  console.log(mean);
  return mean;

}

function mode(numbersArray) {
  
  const numbers = numbersArray.map(num => parseFloat(num));
  let frequencyMap = {};

  // Count the frequency of each number
  numbers.forEach(num => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  });

  let maxFrequency = 0;
  let modes = [];

  // Find the maximum frequency
  for (let num in frequencyMap) {
      if (frequencyMap[num] > maxFrequency) {
          maxFrequency = frequencyMap[num];
          modes = [Number(num)]; // Reset modes array with the new mode
      } else if (frequencyMap[num] === maxFrequency) {
          modes.push(Number(num)); // Add additional mode
      }
  }

  return modes[0];
}

module.exports = {
  mode: mode,
  mean: mean,
  median: median
  };