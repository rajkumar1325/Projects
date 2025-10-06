const chatbotContainer = document.getElementById("chatbotContainer");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatbotMessages = document.getElementById("chatbotMessages");



const chatbotBtn = document.getElementById("chatbotBtn");
const closeChatbotBtn = document.getElementById("closeChatbotBtn");

// TOGGLE CHATBOT VISIBILITY
chatbotBtn.addEventListener("click", () => {
  chatbotContainer.classList.remove("hidden"); //tells the browser to find and remove the class named "hidden" from the chatbotContainer element.{hidden = (display: none;)}
});

closeChatbotBtn.addEventListener("click", () => {
  chatbotContainer.classList.add("hidden");
});




let chatbotData = {};

// Load local chatbot JSON
fetch("chatbot_data.json")
  .then(res => res.json()) //when fetched sucessfully --> convert it into JSON
  .then(data => (chatbotData = data)) //assign paerse json to chatbot data
  .catch(err => console.error("Error loading chatbot data:", err)); //print error inside console


  




// Send message
sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});

async function handleSend() {
  const message = userInput.value.trim(); //skip leading/trailing spaces
  if (!message) return;
  userInput.value = "";

  appendMessage(message, "user");
  showTypingIndicator();

  // --- DELAY AND RESPONSE LOGIC ---
  // 1. Wait for the bot's response
  const responsePromise = getBotReply(message);

  // 2. Wait for a minimum of 1 second (1000ms)
  const delayPromise = new Promise(resolve => setTimeout(resolve, 1000));

  // 3. Wait for both the bot response and the delay to complete
  const [response] = await Promise.all([responsePromise, delayPromise]);
  // --- END DELAY LOGIC ---

  hideTypingIndicator();
  appendMessage(response.text, "bot", response.source);
}



// BOT-TYPING ANIMATION
function showTypingIndicator() {
  const typingDiv = document.createElement("div"); //creates a new <div> to show TEMPRORARY TYPING ANIMATION
  typingDiv.id = "typingIndicator"; //Sets its id
  typingDiv.className = "typing-indicator self-start"; //Gives it the CSS classes for styling and left alignment.
  typingDiv.innerHTML = ` 
    <span></span>
    <span></span>
    <span></span>
  `; //animated dots
  chatbotMessages.appendChild(typingDiv); //Adds this typing indicator to the chat window
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; //Scrolls the chat to the bottom so the indicator is always visible.
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}



// function to add a message to the chat window. Takes the message text, who sent it (user or bot), and an optional source label.
function appendMessage(text, sender, source = null) {
  const msgWrapper = document.createElement("div"); //act as a container for each chat message.
  msgWrapper.className = "flex w-full";

  const msgDiv = document.createElement("div"); //actual chat bubble containing the message text.

  if (sender === "user") {
    msgWrapper.classList.add("justify-end");
    msgDiv.className = "bg-black text-white rounded-lg p-2 max-w-[80%]";
    msgDiv.textContent = text;
    if (source) {
      const label = document.createElement("div");
      label.className = "text-[10px] text-gray-400 mt-1";
      label.textContent = `(${source})`;
      msgDiv.appendChild(label);
    }
    msgWrapper.appendChild(msgDiv);
    chatbotMessages.appendChild(msgWrapper);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  else {
    msgWrapper.classList.add("justify-start");
    msgDiv.className = "bg-gray-200 text-gray-800 rounded-lg p-2 max-w-[80%]";
    typewriterEffect(msgDiv, text, 30, function() {
      if (source) {
        const label = document.createElement("div");
        label.className = "text-[10px] text-gray-400 mt-1";
        label.textContent = `(${source})`;
        msgDiv.appendChild(label);
      }
      msgWrapper.appendChild(msgDiv);
      chatbotMessages.appendChild(msgWrapper);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    });
  }

  msgWrapper.appendChild(msgDiv);
  chatbotMessages.appendChild(msgWrapper);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}


//Type-writer effect.
function typewriterEffect(element, text, speed = 30, callback) {
  element.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      if (text[i] === "<") {
        const end = text.indexOf(">", i);
        element.innerHTML += text.slice(i, end + 1);
        i = end + 1;
      } else {
        element.innerHTML += text[i];
        i++;
      }
      setTimeout(type, speed);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  }
  type();
}






// 🔍 Check inside the JSON -- when reply found, this fn returns an object.
async function getBotReply(input) {
  input = input.toLowerCase();

  // Loop through each entry in the array
  for (const item of chatbotData) {
    // Check if any keyword matches the input
    if (item.keywords.some(kw => input.includes(kw))) {
      return { text: item.response, source: "local database" };
    }
  }
  // If no match found after checking all items
  return { text: "Sorry! I can't assist you here", source: "local database" };
}


