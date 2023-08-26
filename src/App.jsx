import React, { useState } from 'react'; // Uncomment this line to import useState
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState(""); // State to capture input value

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: inputValue, // Use the captured input value
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <section className="side-bar">
        <button onClick={getMessages}>Create chat</button> {/* Add onClick handler */}
        <ul className="history">
          <li>Mpho</li>
        </ul>
        <nav>built with love by Mpho</nav>
      </section>
      <section className="main">
        <h1>Smart-Bot</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> {/* Capture input value */}
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            deserunt aut assumenda ratione, laborum debitis nam enim inventore
            necessitatibus provident fuga pariatur facilis sapiente commodi
            architecto. Veniam alias vel sunt!
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
