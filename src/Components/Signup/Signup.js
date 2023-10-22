import React from "react";
import { useState } from "react";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Form submitted");

   

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(`user succesfully created! ${user.uid}`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`user didnot created! ${error}`)
    // ..
  });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter your Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter your Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
