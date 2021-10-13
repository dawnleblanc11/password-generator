// Assignment Code
var generateBtn = document.querySelector("#generate");
// Upon Generate Password Button (generateBtn) on Click (generateBtn.addEventListener("click",writePassword))
// Per AboutME: via a series of prompts
// User will be asked via windows, what length they would like their password to be
// Send an error message if outside range
// Then verify via click ok on prompt if they want Upper, Lower, Numeric or Special Characters

// Record the password length the user selects- restricted between 8-128 in userpwLength
var userpwLength = window.prompt('Please choose a password length between 8 and 128 characters:');
   if (userpwLength >128 || userpwLength <8) {
     window.alert('Reminder your password length needs to be between 8 and 128 characters:')
   } 
   else {
//Identify the user selections and capturing the boolean value in the variable
   var userpwUpper = window.confirm('Would you like the password to include Uppercase letters?');
   var userpwLower = window.confirm('Would you like the password to include lowercase letters?');
   var userpwNumeric = window.confirm('Would you like the password to include numbers?');
   var userpwSpecial = window.confirm('For a stronger password, would you like to include special characters?');
   }
   
   if (userpwUpper+userpwLower+userpwNumeric+userpwSpecial === 0) {
    window.alert("Please select at least one character type")
   }
//Setting up sample arrays for testing logic- will expand later
   upperArr = ["A","B","C","D","E"];
   lowerArr = ["a","b","c","d"];
   numericArr = [0,1,2,3,4];
   specialArr = ["#","*","<","<"];
   
//testing the boolean value logic for user input
if (userpwUpper == true) {
    console.log(upperArr);
   }
   else {
      console.log('Upperno');
  }
  
  if (userpwLower ==true) {
    console.log(lowerArr);
   }
   else {
      console.log('Lowerno');
  }
  if (userpwNumeric == true) {
    console.log(numericArr);
   }
   else {
      console.log('Numbericno');
  }
  if (userpwSpecial == true) {
    console.log(specialArr);
   }
   else {
      console.log('Specialno');
  }
/*
if (userPWLower = true) { 
    console.log(lowerArr);
}
   else {
     console.log("lowerno");
   }

if (userPWNumeric = true) {
  console.log(numArr);
}
else {
  console.log("Number no");
}

if (userPWSpecial = true) {
  console.log(specArr);
}
else {
  console.log("specialno");
}
*/




    

/*
const Lower_Char_Codes_from_table = fullRandomArray (65,90)
const Numberic_Char_Codes_from_table = fullRandomArray(48,57)
const Special_Char_codes_from_table = fullRandomArray(32,47).concat(fullRandomArray(58,64)).concat(fullRandomArray(91,96)).concat(fullRandomArray(123,126))
       //specialArr = ["' ',!,",#,$,%,&,',(,),*,+,',',-,.,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~,"]
       //for (leti=0;i<specialarr.length;i++)
function FullRandomArray(low,high) {
  var array = []
  for (let i=low;i <=high; i++) {
    array.push(i)
  }
  return array
}

// Generating 4 random arrays of all possible values uppercase, lower case, numeric and special
function fullRandomUpper {
  return String.fromCharCode(math.floor(Math.random)()* 32 + 122 )
}
function fullRandomLower {
  return String.fromCharCode(Math.floor(Math.random)() *26 + 97)
}
function fullRandomNumeric {
  return String.fromCharCode(Math.floor(Math.random)() *26 + 97)
}
function fullRandomSpecial {
  return String.fromCharCode(Math.floor(Math.random)() *26 + 97)
}
// use .concat or +

// Function that creates passwsord called generatePassword
  function generatePassword( ) {
    for (let i=0; i<pwlength;i+= typesCount) {
       typesarr.forEachType(type => {const funcName=object.keys(type[0])
      generatePassword += randomFunc[funcName]();})
     }
    
        }

//take from all the characters 
//randonize the order in which they appear in the password
    //create a types array
    const TypesCount = lower +upper +number +symbol

    var typesarr = [{lower}, {upper}, {number}, {special}].filter(item=> Object.values(items)[0])
     
var finalPW = generatePawword.slice(0,pwLength)
*/
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
