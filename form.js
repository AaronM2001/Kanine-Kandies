// console.log("js is Alive");
// function printError(elemId, hintMsg){
//     document.createElementById(elemId).innerHTML = hintMsg;
// }
// function validateForm(){
//     var name  = document.contactForm.name.value;
//     var email = document.contactForm.email.value;
//     var moble = document.contactForm.moble.value;
//     var contry = document.contactForm.contry.value;
//     var gender = document.contactForm.gender.value;
//     var hobbies = [];
//     var checkboxes = document.getElementsByName("hobbies[]");
//     for (var i = 0; i < checkboxes.length; i++) {
// if (checkboxes[i].checked);
//     }

// }
// var nameErr = mobleErr = contryErr = genderErr = true;
// if (name == "") {
//     printError("nameErr", "Please enter your name");
// }else{
//     var regex = /^[a-zA-Z/s]+$/;
//     if ((regex).test(name) ===false) {
//         printError("nameErr")
//     }
// }
// var regex = /^\S+@\S+\.\S+$/;
// if(email == ""){
//     printError("emailErr", "Please enter a valid email")
// }else{
//     printError("emailErr", "");
//     emailErr=false;
// }
// var regex =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// if (moble == ""){
//     printError("mobleErr", "please enter your moble number");

// }else{
//     printError("mobleErr", "");
//     mobleErr = false;
// }
// // var regex =
// // if(password == ""){
// //     printError("passwordErr", "please enter password")
// // }else{
// //     printError("passwordErr", "");
// //     passwordErr = false;
// // }
// // printError("passwordErr", "please enter password")

// if(gender == " "){
//     printError("genderErr", "please select gender");
// }else{
//     printError("genderErr", " ");
//     genderErr = false;
// }

// if(contry == "Select"){
//     printError("contryErr", "please select");
// }else{
//     printError("contryErr"," ");
//     contryErr = false;
// }
// if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
//     return false;
// }else{
//     var dataPreview = "You've entered the following details: \n" +
//             "Full Name: " + name + "\n" +
//             "Email Address: " + email + "\n" +
//             "Mobile Number: " + mobile + "\n" +
//             "Country: " + country + "\n" +
//             "Gender: " + gender + "\n";
//         if (hobbies.length) {
//             dataPreview += "Hobbies: " + hobbies.join(", ");
//         }
//         // Display input data in a dialog box before submitting the form
//         alert(dataPreview);
//     };
    // var button = document.getElementById('lib-button');
    // var onClick 
//     var button = document.getElementById('lib-button');
// var onClickEvent = function(){
// var noun = document.getElementById('noun').value;
// var adjective = document.getElementById('adjective').value;
// var name = document.getElementById('person').value;
// var story = document.createTextNode(`${name}, married a ${adjective}, they like to ${noun}`);
// var storyp = document.getElementById('story');
// storyp.appendChild(story);
// }
// button.addEventListener('click', onClickEvent);
    
    
    function libit(){
        var storyDiv = document.getElementById("story");
        var person = document.getElementById("person").value;
        var adjective  = document.getElementById("adjective").value;
        var noun = document.getElementById("noun").value;
        storyDiv.innerHTML = person +" married a " + adjective + " " + noun +"... So weird!";
    }
    var libButton = document.getElementById('lib-button');
    libButton.addEventListener('click',libit);