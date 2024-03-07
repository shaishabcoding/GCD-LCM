const findGCD = (...nums) => {
  const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

  return nums.reduce((gcd, num) => calculateGCD(gcd, num));
}

const findLCM = (...nums) => {
  const calculateLCM = (a, b) => (a * b) / findGCD(a, b);

  return nums.reduce((lcm, num) => calculateLCM(lcm, num));
}

const id = (el) => document.getElementById(el);