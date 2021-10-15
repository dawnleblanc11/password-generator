// Assignment Code
var generateBtn = document.querySelector("#generate");
// Upon Generate Password Button (generateBtn) on Click (generateBtn.addEventListener("click",writePassword))
// Per AboutME: via a series of prompts
// User will be asked first what length they would like their password to be
// Send an error message if outside range
// Then verify via click ok on prompt if they want Upper, Lower, Numeric or Special Characters

// Record the password length the user selects- restricted between 8-128 in userpwLength
var userpwLength = window.prompt(
  "Please choose a password length between 8 and 128 characters:"
);
if (userpwLength > 128 || userpwLength < 8) {
  window.alert(
    "Reminder your password length needs to be between 8 and 128 characters:"
  );
} else {
  //Identify the user selections and capturing the boolean value in the variable
  var userpwUpper = window.confirm(
    "Would you like the password to include Uppercase letters?"
  );
  var userpwLower = window.confirm(
    "Would you like the password to include lowercase letters?"
  );
  var userpwNumeric = window.confirm(
    "Would you like the password to include numbers?"
  );
  var userpwSpecial = window.confirm(
    "For a stronger password, would you like to include special characters?"
  );
}
if (userpwUpper + userpwLower + userpwNumeric + userpwSpecial === 0) {
  window.alert("Please select at least one character type");
}

//Setting up starting arrays 
let upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//source of special charaters unicode https://owasp.org/www-community/password-special-characters
let specialArr = ['\u0020','\u0021','\u0022','\u0023','\u0024','\u0025', '\u0026','\u0027', '\u0028', '\u0029', '\u002A','\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u005B', '\u005C', '\u005D', '\u005E', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
//use the unicodes for special characters to avoid syntax problems in the array

let combineduseranswers = [userpwUpper,userpwLower,userpwNumeric,userpwSpecial];

let finalPassword =[];

//if userselction == true, shuffle (associatedarray) and place into final password array;
function generatePasswordupper( ) {
  if (userpwUpper == 'true'); {
  shuffle(upperArr);
  for (let i=0; i<userpwLength;i++) {
  finalPassword[i] = upperArr[i];
  }
  console.log(finalPassword);
  }
}

function generatePasswordlower( ) {
  if (userpwLower == 'true'); {
  shuffle(lowerArr);
  for (let i=0; i<userpwLength;i++) {
  finalPassword[i] = lowerArr[i];
  }
  console.log(finalPassword);
  }
}

function generatePasswordnumeric( ) {
  if (userpwNumeric == 'true'); {
  shuffle(numericArr);
  for (let i=0; i<userpwLength;i++) {
  finalPassword[i] = numericArr[i];
  }
  console.log(finalPassword);
  }
}

function generatePasswordspecial( ) {
  if (userpwSpecial == 'true'); {
  shuffle(specialArr);
  for (let i=0; i<userpwLength;i++) {
  finalPassword[i] = specialArr[i];
  }
  console.log(finalPassword);
  }
}

//used Fisher Yates Shuffle method swap elements array[i] and array[j]
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

//take from all the characters 
//randomize the order in which they appear in the password

//var finalPW = generatePassword.slice(0,pwLength)

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;


generatePasswordupper();
generatePasswordlower();
generatePasswordnumeric();
generatePasswordspecial();

generateBtn.addEventListener("click", writePassword);
