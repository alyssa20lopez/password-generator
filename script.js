// Assignment Code
var generateBtn = document.querySelector("#generate");
const generateButton = document.getElementById("generateBtn");

// prompt("How many characters do you want to use? Choose between 8 and 128 characters!");
// prompt("Do you want to include lowercase?");
// prompt("Do you want to include lowercase?");
// prompt("Do you want to include uppercase?");
// prompt("Do you want to include special characters?");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 0;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
  }
   document.getElementById("password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = prompt("How many characters do you want to use? Choose between 8 and 128 characters!");
  if (passwordLength > 8 || passwordLength < 128)
  {
    console.log ("Your new password has " + passwordLength + "characters!")
  } else {
    console.log ("Characters must be between 8 and 128 characters. Try again!")
  }
} 
