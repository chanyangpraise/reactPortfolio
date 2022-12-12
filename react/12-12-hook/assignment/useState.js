import React, { useState } from 'react';

function RandomNumberList() {
// Declare a new state variable, which we'll call "randomNumbers"
const [randomNumbers, setRandomNumbers] = useState([]);

function handleClick() {
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Add the random number to the list of random numbers
setRandomNumbers([...randomNumbers, randomNumber]);
}

return (
<div>
	<button onClick={handleClick}>
		Add a random number
	</button>
	<ul>
		{randomNumbers.map(number => (
		<li key={number}>{number}</li>
		))}
	</ul>
</div>
);
}
