function findGCD(...nums) {
  const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

  return nums.reduce((gcd, num) => calculateGCD(gcd, num));
}

function findLCM(...nums) {
  const calculateLCM = (a, b) => (a * b) / findGCD(a, b);

  return nums.reduce((lcm, num) => calculateLCM(lcm, num));
}