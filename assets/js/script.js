// Assignment code here

// Declare character arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperChars = lowerChars.map(char => char.toUpperCase());
const specialChars = [' ', '!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

// Functions
function generatePassword() {
  // Declare and reset password and character array
  let password = "";
  let charSelect = [];

  // Declare password length
  let passLength = getPassLength();
  if (passLength === undefined) {
    return null;
  }

  // Declare user input and create charSelect array
  let conf1 = confirm("Include numbers?");
  if (conf1 === true) {
    charSelect.push(...numbers);
  }

  let conf2 = confirm("Include lower case letters?");
  if (conf2 === true) {
    charSelect.push(...lowerChars);
  }

  let conf3 = confirm("Include upper case letters?");
  if (conf3 === true) {
    charSelect.push(...upperChars);
  }

  let conf4 = confirm("Include special characters?");
  if (conf4 === true) {
    charSelect.push(...specialChars);
  }

  // If user selects 'Cancel' for all options
  if (charSelect.length === 0) {
    alert("Password must contain at least one type of character.\nPlease try again.");
    return null;
  }

  // Generates password using random number from 0 to charSelect.length - 1
  for (let i = 0; i < passLength; i++) {
    password += charSelect[getRand(charSelect.length)];
  }
  return password;
}

// Returns password length after conditions are met
function getPassLength() {
  length = prompt("Choose password length:");

  // If the user hits 'Cancel'
  if (length === null) {
    return;
  }

  // Password length must be between 8 and 128 characters
  while (length < 8 || length > 128) {
    if (length < 8) {
      alert("Password must contain at least 8 characters.")
    }
    else if (length > 128) {
      alert("Password cannot exceed 128 characters");
    }

    length = prompt("Choose password length:");

    // If the user hits 'Cancel' after alerts
    if (length === null) {
      return;
    }
  }
  return length;
}

// Return random number from 0 to charSelect.length - 1
function getRand(max) {
  return Math.floor(Math.random() * max);
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
