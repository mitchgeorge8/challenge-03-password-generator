// Assignment code here

// Declare character arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upperChars = lowerChars.map(char => char.toUpperCase());
const specialChars = [' ', '!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
const chars = [numbers, lowerChars, upperChars, specialChars];

let charSelect = "";
let password = "";

// Functions
function generatePassword() {
  // Declare user inputs and create conditions
  let charCount = getCharCount();
  if (charCount === undefined) {
    return null;
  }
  let numConfirm = confirm("Include numbers?");
  let lowerCharConfirm = confirm("Include lower case letters?");
  let upperCharConfirm = confirm("Include upper case letters?");
  let specialCharConfirm = confirm("Include special characters?");

  // Generate password
  for (let i = 0; i < charCount; i++) {
    password += password + lowerChars[getRand(0, length.lowerChars)];
  }
  return password;
}

function getCharCount() {
  count = prompt("Choose password length:");
  if (count === null) {
    return;
  }
  while (count < 8 || count > 128) {
    if (count < 8) {
      alert("Password must contain at least 8 characters.")
    }
    else if (count > 128) {
      alert("Password cannot exceed 128 characters");
    }
    count = prompt("Choose password length:");
    if (count === null) {
      return;
    }
  }
  return count;
}

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min));
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
