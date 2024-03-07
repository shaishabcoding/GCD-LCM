console.clear();
id("find").onclick = _ => {
  const nums = id("nums_input").value.includes(",") && id("nums_input").value.split(',').map(num => parseInt(num));

  if (nums) {
    id("lcm").textContent = findLCM(...nums);
    id("gcd").textContent = findGCD(...nums);
  } else
    id("nums_input").focus();
}