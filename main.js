console.clear();

id("find").onclick = _ => {
  ["lcm", "gcd", "fact", "multi"].forEach((el) => {
    id(el).textContent = 0;
  })

  const input = id("nums_input").value.trim().replace(/^,|,$/g, "");

  if (input.includes(",")) {
    const nums = JSON.parse(`[${input}]`);

    id("lcm").textContent = findLCM(...nums);
    id("gcd").textContent = findGCD(...nums);
  } else if (+input) {
    id("fact").textContent = findFactors(+input);
    id("multi").textContent = findMultiplier(+input);
  } else {
    id("nums_input").focus();
  }
}