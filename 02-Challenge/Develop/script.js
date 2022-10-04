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

// charset variables for each choice
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbol =  ["!", "%", "&", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// empty string variable to be filled by passwordLength prompt
var passwordLength = "";
 

function generatePassword() {

 // inital prompt for desired password length
  var passwordLength = (prompt("Please Input your Desired Password Length, it must be Between 8 and 128 Characters"));

  // if user hits cancel it returns to default screen
  if (!passwordLength) {
    return;
  }

  // loop which reprompts user to input proper password length when value is more or less than requested length or is not a number, returns to default if they hit cancel
  while (passwordLength < 8 || passwordLength > 128 || (isNaN(passwordLength))) {
    if (passwordLength < 8 || passwordLength > 128) {
    alert("You must input a Minimum of 8 and Maximum of 128 Characters for your Password Length!");
    passwordLength = (prompt("Please Input your Desired Password Length, it must be Between 8 and 128 Characters")); 
    }
    else if ((isNaN(passwordLength))) {
      alert("Your Password Length must be a Number!");
      passwordLength = (prompt("Please Input your Desired Password Length, it must be Between 8 and 128 Characters"));
    }
    else if (!passwordLength) {
      return;
    }
  }

  // variables for each chartype confirmation with confirm prompt
  var confirmUpper = confirm("Press Ok to use Uppercase Letters in your Password, Press Cancel to Omit Them");
  var confirmLower = confirm("Press OK to use Lowercase Letters in your Password, Press Cancel to Omit Them");
  var confirmSymbol = confirm("Press OK to Use Symbols in your Password, Press Cancel to Omit Them");
  var confirmNumber = confirm("Press OK to use Numbers in your Password, Press Cancel to Omit Them");

  // loop which reprompts user for chartype choices if they choose none
  while (confirmLower === false && confirmNumber === false && confirmSymbol === false && confirmUpper === false) {
    alert("You Must Choose at Least One Character Type!");
    var confirmUpper = confirm("Press Ok to use Uppercase Letters in your Password");
    var confirmLower = confirm("Press OK to use Lowercase Letters in your Password");
    var confirmSymbol = confirm("Press OK to Use Symbols in your Password");
    var confirmNumber = confirm("Press OK to use Numbers in your Password");
  }

  // empty array variable to collect choosen chartypes for concat
  var choosenCharacters = []

  // these four if statments concatenate each associated chartype within the choosenCharacters array
  if (confirmLower === true) {
    choosenCharacters = [...choosenCharacters, ...lowerCase]
  }

  if (confirmUpper === true) {
    choosenCharacters = [...choosenCharacters, ...upperCase]
  }

  if (confirmNumber === true) {
    choosenCharacters = [...choosenCharacters, ...number]
  }

  if (confirmSymbol === true) {
    choosenCharacters = [...choosenCharacters, ...symbol]
  }

  console.log(choosenCharacters);

  // empty string to collect generated password
  var newPassword = ""

  // for loop for password generation 
  for (var i = 0; i < passwordLength; i++)  {

    newPassword = newPassword + choosenCharacters[Math.floor(Math.random() * choosenCharacters.length)];

  }
  console.log(newPassword);
  
  return newPassword;
};













  






  

  







  








  






 

  




