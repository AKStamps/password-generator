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


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbol =  ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

 
var chooseCharacter = [
  
  function upperCase() {
    return charset.upperCase[Math.floor(Math.random() * charset.upperCase.length)]
  },

  function lowercase() {
    return charset.lowerCase[Math.floor(Math.random() * charset.lowerCase.length)]
  },

  function symbol() {
    return charset.symbol[Math.floor(Math.random() * charset.symbol.length)]
  },

  function number() {
    return charset.number[Math.floor(Math.random() * charset.number.length)]
  }

]

var confirmLower = confirm("Please click \"OK\" to use Lowercase Letters in your Password")
if (confirmLower === true) {
  (lowercase() === confirmLower)

}
var confirmSymbol = confirm("Please click \"OK\" to use Symbols in your Password")
if (confirmSymbol === true) {
  (symbol() === confirmSymbol)
}
var confirmNumber = confirm("Please click \"OK\" to use Numbers in your Password")
if (confirmNumber === true) {
  (number() === confirmNumber)
}
var confirmUpper = confirm("Please click \"OK\" to use Uppercase letters in your Password")
if (confirmUpper === true) {
  (upperCase() === confirmUpper)
}

length = prompt("How Many Characters Would You Like Your Password to Be? Minimum of 8 Characters, Maximum of 128")



function generatePassword() {


function length() {

length;

if (length == '') {
  alert("You Must Enter a Password Length!");
  
} 
  const regex = new RegExp(/[^0-9]/, 'g');
  const val = length.value

if (val.match(regex)) {
  alert("Must be a Number!");
}

else if (length < 8 || length > 128) {

  alert("Your Password Must be Between 8 and 128 Characters!");

}

};



  








  






 
}
  




