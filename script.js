// Assignment code here
//Set Glbal variables

  var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
  var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numVal = ["1234567890"];
  var speChar = ["±!@#%^&*()+-=§£™¡¢∞§¶•–≠"];
  var possNum = "";


//checking to see if the array is setup correctly
//console.log(speChar [3]);

//Welcome prompt -- console.logging the prompt to see if it the 
function startWelcome() {
  getData = prompt("Welcome to the Password Generator. Please choose a number between 8 and 128 characters:");
  if (getData  <=  8 || getData >= 128 ) {

  alert("You need to provide a valid andswer");

  startWelcome();
  
  } else {

possNum = "";


//setup confirms
lowerCheck = confirm ("Do  you want lowercase letters?");
  if (lowerCheck) {
    possNum = possNum + lowerCase
  }
  else {
    alert ("Your password will not have lowercase letters");
  }

  upperCheck = confirm ("Do you want uppercase letters?");
  if (upperCheck) {
     
    possNum = possNum + upperCase
  }
  else {
    alert ("Your password will not have uppercase letters");
  }

  numCheck = confirm ("Do you want your password to have numbers?");
  if (numCheck) {
    alert ("Your password will have numbers");
    possNum = possNum + numVal
  }
  else {
    alert ("Your password will not have numbers");
  }

  specCheck = confirm ("Do you want your password to have special characters?");
  if (specCheck) {
    alert ("Your password will have special characters");
    possNum = possNum + speChar
  }
  else {
    alert ("Your password will not have special characters");
  }
  

}

};



//for loop



// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  startWelcome();

  var passwordText = document.querySelector('#password');

  var finPWD = ""

  for (i = 0; i < getData; i++) {
    finPWD += possNum[Math.floor(Math.random() * possNum.length)];
  
  }

  passwordText.value = finPWD;

}

var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


