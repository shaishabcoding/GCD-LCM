const findGCD = (...nums) => {
  const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

  return nums.reduce((gcd, num) => calculateGCD(gcd, num));
}

const findLCM = (...nums) => {
  const calculateLCM = (a, b) => (a * b) / findGCD(a, b);

  return nums.reduce((lcm, num) => calculateLCM(lcm, num));
}

const findFactors = (num) => (
  [...Array(num + 1).keys()].filter(i => num % i === 0)
);

const findMultiplier = (num) => (
  Array.from({ length: 10 }, (_, i) => num * (i + 1))
);

const id = (el) => document.getElementById(el);