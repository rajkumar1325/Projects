### 1. The fetch block loads the JSON file once and stores it in chatbotData

```
// Load local chatbot JSON
fetch("chatbot_data.json")
  .then(res => res.json()) //conversion to JSON
  .then(data => (chatbotData = data)) //assign parsed json to chatbot data
  .catch(err => console.error("Error loading chatbot data:", err)); 
  ```

  ### 2. The getBotReply function then searches through chatbotData every time the user sends a message, looking for a keyword match.



  1. `function appendMessage(text, sender, source = null)`: Defines a function to add a message to the chat window. Takes the message text, who sent it (user or bot), and an optional source label.
  2. `msgWrapper`: creates a new <div> element to act as a container for each chat message.
  3. `msgDiv`: The actual message bubble <div>.

  4. `if (sender === "user")`: Checks if the message is from the user.

    - `justify-end`: Aligns the message to the right (like WhatsApp).
    - `bg-indigo-600 text-white`: Styles the bubble with a blue background and white text.
    - `msgDiv.textContent = text`;: Sets the message text.
    - If `source` is provided, adds a small label below the message.
    - Appends the message to the chat and scrolls to the bottom.



    `else`: Handles bot messages.
    - - `justify-start`: Aligns the message to the left.
    - - `bg-gray-200 text-gray-800`: Styles the bubble with a light gray background and dark text.
    - - `typewriterEffect(msgDiv, text, 30, function() {...})`: Animates the bot’s message letter by letter.
    - - After animation, adds the source label if provided, appends the message, and scrolls to the bottom.

- `msgWrapper.appendChild(msgDiv); chatbotMessages.appendChild(msgWrapper); chatbotMessages.scrollTop = chatbotMessages.scrollHeight`;: These lines ensure the message is added and the chat scrolls to the newest message.



