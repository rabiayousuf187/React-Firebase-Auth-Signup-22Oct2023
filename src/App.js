// import logo from './logo.svg';
import "./App.css";
// import { useState } from "react";
import Signup from "./Components/Signup/Signup";


function App() {
  // const [name, setName] = useState("");

  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`The name you entered was:  ${name}`);
  // };
  return (
    <div className="App">
      <h1>React Firebase Signup</h1>
      <Signup/>
      {/* <div>
        <h2 style={{ textAlign: "left" }}>Form:</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={
                  (e) => setName(e.target.value)
                }
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default App;
