// grab the useState hook from react
// the curly brackets are an example of destructuring
// they help us grab specific things from an object
import { useState } from "react";

const FirstUseState = () => {
  //the first variable is the name of the state
  // the second variable is a function which changes the state
  const [name, setName] = useState("...");

  //this function will grab the username and update the name state
  const inputName = () => {
    let newName = prompt("Whats your name?");
    setName(newName);
  };

  return (
    <div className="section">
      <h2>First Use State</h2>
      <p>
        This is React useState. useState is a way React can keep track of data.
        useState is only availale to the components we give it to.
      </p>
      <p>Your name is {name}</p>
      <button onClick={inputName}>Enter Your Name</button>
    </div>
  );
};

export default FirstUseState;
