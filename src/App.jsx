import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState(""); // State to capture input value
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChatRequest = async () => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      const newMessages = [...messages, { text: inputValue, type: "user" }, { text: data.response, type: "bot" }];
      setMessages(newMessages);
      setInputValue("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when messages change
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={handleChatRequest}>Ask Question</button>
        <nav>built with love by Limpopo-Ai Cohort</nav>
      </section>
      <section className="main">
        <h1>Chat Guru</h1>
        <div className="chat-container">
          <div className="chat-feed">
            {/* Map out and display chat messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.type === "user" ? "user" : "bot"}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question..."
            />
            <div id="submit" onClick={handleChatRequest}>
              ➢
            </div>
          </div>
        </div>
        <p className="info">
         The chatbot can provide
          answers to specific questions, as well as offer general information
          about major events and figures in South African history. It is an
          accessible and educational tool that aims to make South African
 history.
            It is an accessible and educational tool that aims to make South
            African history more engaging and approachable for everyone.
          </p>
      </section>
        </div>

  );
};

export default App;
