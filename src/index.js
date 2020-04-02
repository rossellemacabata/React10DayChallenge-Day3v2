import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

function App() {
  const [name, setName] = useState("Zellie");
  const [age, setAge] = useState(30);

  return (
    <div className="App">
      <div>
        <h2 className="subtitle is-4">Update Data from an input</h2>
      </div>

      <div className="input-display">
        <p>Display Name: {name}</p>
        <p>Display Age: {age}</p>
      </div>

      <div className="inputs">
        <div className="field">
          <label className="label">Name: </label>
          <input
            className="input"
            value={name}
            type="text"
            placeholder="William"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Age: </label>
          <input
            className="input"
            value={age}
            type="number"
            placeholder="38"
            onChange={e => setAge(+e.target.value)}
          />
        </div>
      </div>

      <ScotchInfoBar seriesNumber="3" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
