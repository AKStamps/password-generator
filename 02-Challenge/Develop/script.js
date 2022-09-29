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

];

var confirmLower = confirm("Please click \"OK\" to use Lowercase Letters in your Password");
if (confirmLower == true) {
  (lowercase() === confirmLower);

};
var confirmSymbol = confirm("Please click \"OK\" to use Symbols in your Password");
if (confirmSymbol == true) {
  (symbol() === confirmSymbol);
};
var confirmNumber = confirm("Please click \"OK\" to use Numbers in your Password");
if (confirmNumber == true) {
  (number() === confirmNumber);
};
var confirmUpper = confirm("Please click \"OK\" to use Uppercase letters in your Password");
if (confirmUpper == true) {
  (upperCase() === confirmUpper);
};



function generatePassword() {

length = parseInt(prompt("How Many Characters Would You Like Your Password to Be? Minimum of 8 Characters, Maximum of 128"))

if (!length) {
  alert("You Must Enter a Password Length!");

} else if (length < 8 || length >128) {
  parseInt(alert("Your Password Must Be Between 8 and 128 Characters!"));

} else {

  
};





  






 
}
  




