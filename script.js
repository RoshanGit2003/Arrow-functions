// Arrow function to transform the input string
const transformString = (input) => {
  return input
    .split("") // Split the string into an array of characters
    .map((char, index) => `${index}${char.toUpperCase()}`) // Convert each character to uppercase and prepend its index
    .join(""); // Join the array back into a string
};

// Prompt the user to enter a string
const userInput = prompt("Enter a string:");

// Transform the string using the arrow function
const transformedString = transformString(userInput);

// Display the output in the browser window
document.body.innerHTML = `<h2>${transformedString}</h2>`;
