// Assignment code here
//Set Glbal variables
function writePassword () {
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numVal = ['1','2','3','4','5','6','7','8','9','0'];
var speChar = ['!','#','$','%','^','&','*','(',')','@','?','+','=','<','>','/'];

};
//checking to see if the array is setup correctly
//console.log(speChar [3]);


var startWelcome = alert ("Welcome to the Password Generator. Please choose from the following criteria:");

//setup confirms
lowerCase = confirm ("Do  you want lowercase letters?");
  if (lowerCase) {
    alert ("Your password will have lowercase letters");
  }
  else{
    alert ("Your password will not have lowercase letters");
  }

  upperCase = confirm ("Do you want uppercase letters?");
  if (upperCase) {
    alert ("Your password will have uppercase letters");
  }
  else {
    alert ("Your password will not have uppercase letters");
  }

  numVal = confirm ("Do you want your password to have numbers?");
  if (numVal) {
    alert ("Your password will have numbers");
  }
  else {
    alert ("Your password will not have numbers");
  }

  speChar = confirm ("Do you your password to have special characters?");
  if (speChar) {
    alert ("Your password will have special characters");
  }
  else {
    alert ("Your password will not have special characters");
  }



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
