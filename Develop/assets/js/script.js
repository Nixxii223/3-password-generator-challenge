// Assignment code here

function generatePassword() {
  // create variables for lowercase letters, uppercase letters, special characters, and digits
  
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  var numbers = '1234567890'

  // create a variable for all options together
  var allCharacters = lowercaseLetters + uppercaseLetters + specialCharacters + numbers;

// prompt the user for password length, (must be 8-128 characters)
// prompt the user for character types to be included
// user input validated and ensure at least one character type is chosen
// alert the user if invalid criteria have been entered
// randomize the selected characters and generate the random password

  var length = parseInt(prompt("Enter length of password (must be between 8 and 128 characters): "));
  var lengthConfirm = confirm("Confirm character length? " + length);
  var includelowerLetters = confirm("Would you like to include lowercase letters?: ");
  var includeupperLetters = confirm("Would you like to include uppercase letters?: ");
  var includespecialCharacters = confirm("Would you like to include special characters?: ")
  var includeNumbers = confirm ("Would you like to include numbers?: ");

  var confirmedCharacters = '';

  if(includelowerLetters) {
    confirmedCharacters += lowercaseLetters;
  }
  if(includeupperLetters) {
    confirmedCharacters += uppercaseLetters;
  }
  if(includespecialCharacters) {
    confirmedCharacters += specialCharacters;
  }
  if(includeNumbers) {
    confirmedCharacters += numbers;
  }

  if (length < 8 || length > 128 || confirmedCharacters.length === 0) {
    alert("Invalid. Please provide a character length between 8-128 and select at least one character criteria. ")
    return;
  }

  var generatedPassword = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * confirmedCharacters.length);
    generatedPassword += confirmedCharacters.charAt(randomIndex);
  }

  alert(generatedPassword);
  return generatedPassword;
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



