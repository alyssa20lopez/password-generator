// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var initInput = prompt("How many characters do you want in your passphrase? Choose between 8 and 128 characters!");
    var passwordLength = parseInt(initInput);

    if (!initInput || initInput < 8 || initInput > 128) {
      alert("Characters must be between 8 and 128 characters. Try again!");
      return;
    }

    var conLowerCase = confirm("Would you like to include lowercase letters in your passphrase?");
    var conUpperCase = confirm("Would you like to include uppercase letters in your passphrase?");
    var conNumbers = confirm("Would you like to include numbers in your passphrase?");
    var conSymbols = confirm("Would you like to include symbols in your passphrase?");

    if (!conLowerCase && !conUpperCase && !conNumbers && !conSymbols) {
      alert("Must confirm one type of character!");
      return;
    }

    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

    var desiredLength = ''

    if (conLowerCase) {
    desiredLength = desiredLength.concat(lowerCase);
    }
    if (conUpperCase) {
      desiredLength = desiredLength.concat(upperCase);
    } 
    if (conNumbers) {
      desiredLength = desiredLength.concat(numbers);
    } 
    if (conSymbols) {
      desiredLength = desiredLength.concat(symbols);
    }
    console.log(desiredLength);

    var endPassphrase = "";

    for (var i = 0; i < passwordLength; i++) {
      endPassphrase += desiredLength[Math.floor(Math.random() * desiredLength.length)];
    }

    return endPassphrase;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (typeof password === 'undefined') {
    password = "";
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);