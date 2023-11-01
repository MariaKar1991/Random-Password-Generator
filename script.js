// Get the password input element by its ID
const passwordBox = document.getElementById("password");

// Set the desired length of the password
const length = 12;

// Define character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

// Combine all character sets into one string
const allChars = upperCase + lowerCase + number + symbol;

// Function to create a random password
function createPassword() {
  // Initialize an empty string to store the password
  let password = "";

  // Add one character from each character set to ensure inclusion
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  // Generate remaining characters randomly from the combined character set
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Set the generated password in the password input element
  passwordBox.value = password;
}

// Function to copy the password to the clipboard
function copyPassword() {
  // Select the text in the password input element
  passwordBox.select();
  // Execute the copy command to copy the selected text
  document.execCommand("copy");
}
