import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "40px auto" }}>
      <h1 style={{ textAlign: "center" }}>Beginner React useState Project</h1>

      {/* Counter */}
      <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12, marginBottom: 24 }}>
        <h2>Counter</h2>
        <p style={{ fontSize: 20, margin: "8px 0" }}>
          Current Count: <strong>{count}</strong>
        </p>
        <div>
          <button onClick={() => setCount(c => c + 1)} style={{ marginRight: 8 }}>Increase</button>
          <button onClick={() => setCount(c => c - 1)} style={{ marginRight: 8 }}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>

      {/* Input Tracker */}
      <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Input Tracker</h2>
        <input
          type="text"
          placeholder="Type your name..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: 8, width: "100%", maxWidth: 320 }}
        />
        <p style={{ marginTop: 12 }}>
          You typed: <strong>{text || "—"}</strong>
        </p>
      </section>
    </div>
  );
}
