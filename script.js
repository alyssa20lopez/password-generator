// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var initInput = prompt("How many characters do you want in your passphrase? Choose between 8 and 128 characters!");
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
    prompt("Would you like to include lowercase letters in your passphrase?");
    return
  }

  var conLowerCase = confirm("Would you like to include lowercase letters in your passphrase?");
  var conUpperCase = confirm("Would you like to include uppercase letters in your passphrase?");
  var conNumbers = confirm("Would you like to include numbers in your passphrase?");
  var conSymbols = confirm("Would you like to include symbols in your passphrase?");

  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '#$%&()*+,-./:;<=>?@[\]^_`{|}~';


  var desiredLength = []

  if (conLowerCase) {
    desiredLength = desiredLength.concat(lowerCase)
  }
  if (conUpperCase) {
    desiredLength = desiredLength.concat(upperCase)
  } 
  if (conNumbers) {
    desiredLength = desiredLength.concat(numbers)
  } 
  if (conSymbols) {
    desiredLength = desiredLength.concat(symbols)
  }
  console.log(desiredLength);



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
