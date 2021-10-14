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

//Setting up sample arrays for testing logic- will expand later
let upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//source of special charaters unicode https://owasp.org/www-community/password-special-characters
let specialArr = ['\u0020','\u0021','\u0022','\u0023','\u0024','\u0025', '\u0026','\u0027', '\u0028', '\u0029', '\u002A','\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u005B', '\u005C', '\u005D', '\u005E', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
//use the unicodes for special characters to avoid syntax problems in the array

//used Fisher Yates Shuffle swap elements array[i] and array[j]
//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    
/*
   if (userpwUpper == true) {
   console.log(upperArr) 
   }

    /*
    if (userpwUpper == true + userpwLower ==true) {
      choicearray = upperArr.concat(lowerArr)
    };

      if (userpwUpper == true+ userPWLower ==true + userpwNumeric ==true) {
        choicearray = upperArr.concat(lowerArr).concat(numericArr)
      }

        if (userpwUpper == true+ userPWLower ==true + userpwNumeric ==true+ userpwSpecial == true) {
          choicearray = upperArr.concat(lowerArr).concat(numericArr).concat(specialArr)
        }
        else






    console.log(upperArr=[String.fromCharCode(Math.floor((Math.random)()* 65) + 90)]);
    //values in ASCII table 65-90
     }


//testing the boolean value logic for user input
if (userpwUpper == true) {
  for(let i=0; i < userpwLength; i++)
  console.log(upperArr=[String.fromCharCode(Math.floor((Math.random)()* 65) + 90)]);
  //values in ASCII table 65-90
   }
   else {
      console.log('Upperno');
  }
  if (userpwLower ==true) {
    for(let i=0; i < userpwLength; i++)
  console.log(lowerArr=[String.fromCharCode(Math.floor((Math.random)()* 97) + 122)]);
  //values in ASCII table 97-122
   }
   else {
      console.log('Lowerno');
  }
  if (userpwNumeric == true) {
    for(let i=0; i < userpwLength; i++)
    console.log(numericArr=[String.fromCharCode(Math.floor((Math.random)()* 48) + 57)]);
    //values in ASCII table 48-57
   }
   else {
      console.log('Numbericno');
  }
  if (userpwSpecial == true) {
    console.log(specialArr);
   }
   //values in ASCII table 33-47,58-64,91-96,123-126
   else {
      console.log('Specialno');
  }
*/

/*for (let i=0; i<pwlength;i+= typesCount) {
       typesarr.forEachType(type => {const funcName=object.keys(type[0])
      generatePassword += randomFunc[funcName]();})
     }
    for (let i = 0;i<userpwLength;i++) {
     console.log(String.fromCharCode(Math.floor((Math.random)()* 26) + 97));
        }
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

// use .concat or +

// Function that creates passwsord called generatePassword
  function generatePassword( ) {
    for (let i=0; i<pwlength;i+= typesCount) {
       typesarr.forEachType(type => {const funcName=object.keys(type[0])
      generatePassword += randomFunc[funcName]();})
     }
    
        }
//take from all the characters 
//randomize the order in which they appear in the password
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

shuffle(upperArr);
alert (upperArr);
shuffle(lowerArr);
alert (lowerArr);
shuffle(numericArr);
alert (numericArr);
shuffle(specialArr);
alert (specialArr);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
