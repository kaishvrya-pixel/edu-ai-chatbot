function mentorSkill(input) {
  if (input.includes("html")) return "HTML is the structure of a webpage. Example: <h1>Hello</h1>";
  if (input.includes("css")) return "CSS styles a page. Example: h1 { color: blue; }";
  if (input.includes("js")) return "JavaScript makes a page interactive. Example: alert('Hello!');";
  return "Ask me about HTML, CSS, or JavaScript.";
}
