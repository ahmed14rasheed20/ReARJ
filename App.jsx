import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h2 className="title">Beginner React useState Project</h2>
       <h1 className="title">Ahmad Rasheed Jamhour</h1> 


      <section className="card">
        <h2>Counter</h2>
        <p className="count">Current Count: <strong>{count}</strong></p>
        <div className="stack">
          <button className="btn" onClick={() => setCount(c => c + 1)}>Increase</button>
          <button className="btn secondary" onClick={() => setCount(c => c - 1)}>Decrease</button>
          <button className="btn warning" onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      <section className="card">
        <h2>Input Tracker</h2>
        <p className="p-sm">Type anything and watch it update instantly.</p>
        <input
          className="input"
          type="text"
          placeholder="Type your name..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <hr className="hr" />
        <p>You typed: <strong>{text || "—"}</strong></p>
      </section>

      <p className="footer">Made with ❤️ using <code>useState</code></p>
    </div>
  );
}
