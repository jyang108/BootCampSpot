var generatePassword = document.querySelector("#generate")
var copyClipboard = document.querySelector("#copy")
var passwordField = document.querySelector("#password")
var clear = document.querySelector("#clear")
var letter = "abcdefghijklmnopqrstuvwxyz";
var letterU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890";
var special= "!#$%&?@-_.,~";

    //tried creating functions but ran into variables being local and my head hurt
// function generate(){

//     var userPassword = '';
//     var passwordSet = '';

//     if (specialCharChoice = true) {
//         passwordSet += special;
//     }
//     if (numberChoice = true) {
//         passwordSet += numbers;
//     }
//     if (letterChoice = true) {
//         passwordSet += letter;
//     }
//     if (letterUpperChoice = true) {
//         passwordSet += letterU;
//     }

//     for (var i = 0; i < passwordLength; i++) {
//         userPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
//     }
   
//     passwordField.innerHTML = userPassword;
// };



generatePassword.addEventListener("click", function (event) {
    event.preventDefault();

    var passwordLength = prompt("Please input password length between 8 and 128.");
    if (passwordLength === null) {
        return;
    }

        //check for length requirements

        while (passwordLength > 128 || passwordLength < 8) {
            alert("Please choose a length between 8 and 128");
            var passwordLength = prompt("Please input password length between 8 and 128.");
            if (passwordLength === null) {
                return;
            };
        }


    var letterCharChoice = confirm("Do you need lowercase letters?");
    var letterUpperCharChoice = confirm("Do you need uppercase letters?");
    var specialCharChoice = confirm("Do you need special characters?");
    var numberChoice = confirm("Do you need numbers?");

        //check for at least one character type

        while ( specialCharChoice === false &&
            letterCharChoice === false &&
            numberChoice === false &&
            letterUpperCharChoice === false) {
            alert("Please choose one character type");
            var letterCharChoice = confirm("Do you need lowercase letters?");
            var letterUpperCharChoice = confirm("Do you need uppercase letters?");
            var specialCharChoice = confirm("Do you need special characters?");
            var numberChoice = confirm("Do you need numbers?");
        }

    //adds user confirms to password string

    var userPassword = '';
    var passwordSet = '';

    if (specialCharChoice = true) {
        passwordSet += special;
    }
    if (numberChoice = true) {
        passwordSet += numbers;
    }
    if (letterChoice = true) {
        passwordSet += letter;
    }
    if (letterUpperChoice = true) {
        passwordSet += letterU;
    }

    //generates password based on user input through confirms

    for (var i = 0; i < passwordLength; i++) {
        userPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));
    }

    passwordField.innerHTML = userPassword;

    //tried creating functions but ran into variables being local and my head hurt
    //generate()

});




copyClipboard.addEventListener("click", function (event){
    event.preventDefault();
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    //used to copy text
    document.execCommand("copy");
    alert("Copied to clipboard!");

  });

  //clear button made for testing but left in for flavor
  
clear.addEventListener("click", function (event) {
    event.preventDefault();
    passwordField.innerHTML = " ";
});










