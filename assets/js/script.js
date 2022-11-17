// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
// generate question options to pass through to the password function
// return an alert message to the user when the password selection does not meet the criteria.

function getuseroptions() {
//parseint converts the words into a value
  var passwordLength= parseInt(prompt("How many characters would you like your password?"))
  console.log (passwordLength)
//condition passed for password length made
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength){
    console.log('password was less than 8 or greater than 128')
    alert('Please enter a password greater than 8 and less than 128. Please use number keys!')
    return getuseroptions()
  }
//confirmation passed to user to add conditions they would like to use
  var special= confirm("Would you like special characters?")
  var numbers= confirm("Would you like numbers?")
  var lowercase= confirm("Would you like lowercase letter?")
  var uppercase= confirm("Would you like uppercase letters?")
//condition passed a user must pick atleast on character if not user is pulled back to the original screen with an alert promting them 
  if (!special && !numbers && !lowercase && !uppercase){
    console.log ('must pick one character')
    alert('You must pick at least one character type!')

    return getuseroptions()
  }
  //depending on what the user picks the options are returned
  return{
    length: passwordLength,
    special: special,
    numbers: numbers,
    lowercase: lowercase,
    uppercase: uppercase
  }
}

//
function generatepassword(options){

var password = '';
//arrays are connected and then returned depending on user options
var possible= [];
if (options.lowercase){
  possible= possible.concat(lowerCasedCharacters);
 }
if (options. uppercase){
  possible= possible.concat(upperCasedCharacters);
}
if (options.special){
  possible= possible.concat(specialCharacters);
}
if (options.numbers){
possible= possible.concat(numericCharacters)
}
//selected charcaters are selected at ranom and returned back to the user
for (var i = 0; i < options.length; i++) {
var index= Math.floor(Math.random() * possible.length);
var character = possible[index]
password += character;
}
 return password;
}


//random password is placed into to input box when password is generated
function writePassword() {
  var passwordText = document.querySelector("#password");
  var options = getuseroptions()

  var password = generatepassword(options)

  passwordText.value = password;
}     
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//Get user input
//Create an array with all possible characters
//Randomly select characters out the array
//Create password using randomly selected characters
