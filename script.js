// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var initInput = prompt("How many characters do you want to use? Choose between 8 and 128 characters!");
  var passwordLength = parseInt(initInput);

  if (isNaN(passwordLength)) {
    prompt("Characters must be between 8 and 128 characters. Try again!");
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Characters must be between 8 and 128 characters. Try again!");
    return
  }

  if (passwordLength >= 8 || passwordLength <= 128) {
    prompt("Would you like to include lowercase letters in your password?");
    return
  }


  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '#$%&()*+,-./:;<=>?@[\]^_`{|}~';
}

// Write password to the #password input
function 







//   for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * characters.length);
//     password += characters.substring(randomNumber, randomNumber +1);
//   }
//    document.getElementById("password").value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() 
