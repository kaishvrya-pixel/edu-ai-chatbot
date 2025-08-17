const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  let message = userInput.value.trim();
  if (message === "") return;

  appendMessage("You: " + message, "user-message");
  userInput.value = "";

  setTimeout(() => {
    let reply = routeMessage(message.toLowerCase());
    appendMessage("Bot: " + reply, "bot-message");
  }, 500);
}

function appendMessage(text, className) {
  let msg = document.createElement("div");
  msg.className = "message " + className;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Routes user input to different skills
function routeMessage(input) {
  if (input.includes("math")) return mathSkill(input);
  if (input.includes("language")) return languageSkill(input);
  if (input.includes("code") || input.includes("html") || input.includes("css") || input.includes("js"))
    return mentorSkill(input);
  if (input.includes("history")) return historySkill(input);

  return "I can help with Math ➗, Language 🌍, Coding 💻, or History 📜.";
}




