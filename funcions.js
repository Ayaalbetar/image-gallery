function calculateAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
  }

function findMaximum(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
  }
const numbers = [12, 10, 100, 23, 89, 34];
console.log("Array:", numbers);
console.log("Average:", calculateAverage(numbers));
console.log("Maximum:", findMaximum(numbers));