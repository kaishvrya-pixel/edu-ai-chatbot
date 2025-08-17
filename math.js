function mathSkill(input) {
  // Very simple math helper
  try {
    let expression = input.replace("math", "").trim();
    if (expression) {
      let result = eval(expression); // ⚠️ For demo only, not safe in production
      return `Step 1: You asked me to solve '${expression}'\nStep 2: The answer is ${result}`;
    }
    return "Please provide a math expression, e.g., 'math 5+3*2'.";
  } catch {
    return "Sorry, I couldn’t solve that. Try a simple expression like 'math 12/4'.";
  }
}
function mathSkill(input) {
  // Very simple math helper
  try {
    let expression = input.replace("math", "").trim();
    if (expression) {
      let result = eval(expression); // ⚠️ For demo only, not safe in production
      return `Step 1: You asked me to solve '${expression}'\nStep 2: The answer is ${result}`;
    }
    return "Please provide a math expression, e.g., 'math 5+3*2'.";
  } catch {
    return "Sorry, I couldn’t solve that. Try a simple expression like 'math 12/4'.";
  }
}

// Test call for Node.js execution
console.log(mathSkill("math 5+3*2"));