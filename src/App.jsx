// import { useState } from 'react'
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>Create chat</button>
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
            <input type="text" />
            <div id="submit">➢</div>
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
