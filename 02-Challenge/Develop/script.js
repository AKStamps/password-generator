// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var charset = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
  number: "0123456789"
}
 
var chooseCharacter = [
  
  function upperCase() {
    return charset.upperCase[Math.floor(Math.random() * charset.upperCase.length)];
  },

  function lowercase() {
    return charset.lowerCase[Math.floor(Math.random() * charset.lowerCase.length)];
  },

  function symbol() {
    return charset.symbol[Math.floor(Math.random() * charset.symbol.length)];
  },

  function number() {
    return charset.number[Math.floor(Math.random() * charset.number.length)];
  }

]

var confirmUpper = window.prompt("Please click \"OK\" to use Uppercase Letters in your Password")

var confirmLower = window.prompt("Please click \"OK\" to use Lowercase Letters in your Password")

var confirmSymbol = window.prompt("Please click \"OK\" to use Symbols in your Password")

var confirmNumber = window.prompt("Please click \"OK\" to use Numbers in your Password")





function generatePassword() {

 
}
  
  if 
}




