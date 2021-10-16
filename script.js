const passwordEl = document.getElementById("password");
var generateBtn = document.getElementById("generate");

// Upon Generate Password Button (generateBtn) on Click (generateBtn.addEventListener("click",writePassword))
// Per AboutME: via a series of prompts
// User will be asked first what length they would like their password to be
// Send an error message if outside range
// Then verify via click ok on prompt if they want Upper, Lower, Numeric or Special Characters
// let upper;
// let lower;
// let numeric;
// let special;
// let length;


  
   
   



const randomFunc = {
  upper: generateRandomUpper,
  lower: generateRandomLower,
  numeric: generateRandomNumeric,
  special: generateRandomSpecial,
};


function generatePassword() {
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
  let upper=userpwUpper;
   let lower=userpwLower;
   let numeric=userpwNumeric;
   let special=userpwSpecial;
   let length=userpwLength;

  let generatedPassword = " ";
  console.log("upper",upper);
   console.log("lower",lower);
   console.log("numeric",numeric);
   console.log("special",special);
   console.log("length",length);
  const typesCount = upper + lower + numeric + special;
  console.log(typesCount);
  const typesArr = [{ upper }, { lower }, { numeric }, { special }].filter(
    (item) => Object.values(item)[0]
  );
  console.log(typesArr);
  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const typeName = Object.keys(type)[0];
      generatedPassword += randomFunc[typeName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  console.log(finalPassword);
  passwordEl.innerHTML += finalPassword;


}



// define arrays from table of ASCI information or special characters
// randomize selction

function generateRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomNumeric() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSpecial() {
  const special = [
    "\u0020",
    "\u0021",
    "\u0022",
    "\u0023",
    "\u0024",
    "\u0025",
    "\u0026",
    "\u0027",
    "\u0028",
    "\u0029",
    "\u002A",
    "\u002B",
    "\u002C",
    "\u002D",
    "\u002E",
    "\u002F",
    "\u003B",
    "\u003C",
    "\u003D",
    "\u003E",
    "\u003F",
    "\u005B",
    "\u005C",
    "\u005D",
    "\u005E",
    "\u0060",
    "\u007B",
    "\u007C",
    "\u007D",
    "\u007E",
  ];
  return special[Math.floor(Math.random() * special.length)];
}
//use the unicodes for special characters to avoid syntax problems in the array
//source of special charaters unicode https://owasp.org/www-community/password-special-characters

// Write password to the #password input
function writePassword() {
  
  };

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
