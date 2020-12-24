// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = 0;
var passLower = true;
var passUpper = true;
var passNum = true;
var passSpec = true;

function generatePassword() {
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("How long would you like your password to be?\nMUST BE BETWEEN 8 - 128.");
    if (passLength < 8 || passLength > 128) {
      alert("Unexpected Entry. Please enter a number between 8 - 128.");
    }
    console.log(passLength);
  }

  passLower = confirm("Do you want to include lower case characters?\nOK = Yes  Cancel = No")
  passUpper = confirm("Do you want to include UPPER CASE characters?\nOK = Yes  Cancel = No")
  passNum = confirm("Do you want to include numbers?\nOK = Yes  Cancel = No")
  passSpec = confirm("Do you want to include special characters?\nOK = Yes  Cancel = No")

  return genPass(passLength);
}

function writePassword() {
  passLength = 0
  var pwdOutput = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = pwdOutput;

}

function genPass(length) {
  var password = "";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specChar = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";
  while (password.length < length) {
      var randOption = Math.floor(Math.random() * 4) + 1;
      console.log(randOption)
      if (randOption === 1 && passLower === true) {
          password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
      else if (randOption === 2 && passUpper === true) {
          password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      }
      else if (randOption === 3 && passNum === true) {
          password += numeric.charAt(Math.floor(Math.random() * numeric.length))
      }
      else if (randOption === 4 && passSpec === true) {
          password += specChar.charAt(Math.floor(Math.random() * specChar.length))
      }
      else {
        alert("How on Earth am I supposed to generat a password without lowercase letters, uppercase letters, numbers, or special characters???")
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
        break
      }
  }
  console.log(password)
  return password;
}

// function genPass(length) {
//   var password = "";
//   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
//   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var numeric = "0123456789";
//   var specChar = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";
//   for (i = 0; i < length; i++) {
//       var randOption = Math.floor(Math.random() * 4) + 1;
//       console.log(randOption)
//       if (randOption === 1) {
//           password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
//       }
//       else if (randOption === 2) {
//           password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
//       }
//       else if (randOption === 3) {
//           password += numeric.charAt(Math.floor(Math.random() * numeric.length))
//       }
//       else if (randOption === 4) {
//           password += specChar.charAt(Math.floor(Math.random() * specChar.length))
//       }
//   }
//   console.log(password)
//   return password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt for password length
//      Password must be 8-128 characters
// Prompt for character types
//      Choises are lowercase, uppercase, numeric, and/or special characters
// 
// 
// 
// 
// 
// 
// 
// 
