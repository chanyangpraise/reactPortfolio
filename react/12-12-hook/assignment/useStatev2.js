import React, { useState } from "react";

const Example = () => {
  // Declare a new state variable called "randomNumber" and initialize it to null
  const [randomNumber, setRandomNumber] = useState(null);

  const handleClick = () => {
    // Generate a random number between 1 and 100
    const number = Math.floor(Math.random() * 100) + 1;
    // Update the state variable with the new random number
    setRandomNumber(number);
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Random Number</button>
      {randomNumber && <p>Your random number is: {randomNumber}</p>}
    </div>
  );
};
