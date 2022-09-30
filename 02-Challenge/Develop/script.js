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

var passwordLength = "";
 
var confirmUpper;
var confirmLower;
var confirmSymbol;
var confirmNumber;

function generatePassword() {

  var passwordLength = (prompt("Please Input your Desired Password Length, it must be Between 8 and 128 Characters"));

  if (passwordLength < 8 || passwordLength >128) {
    alert("You must input a Minimum of 8 and Maximum of 128 Characters for your Password Length");
    passwordLength = (prompt("Please Input your Desired Password Length, it must be Between 8 and 128 Characters"));
  }

  else if (!passwordLength) {
    return;
  }

  







  








  






 
}
  




