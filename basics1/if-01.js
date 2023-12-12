let email = "abhi@google.com";
// if (email == "abhishek@google.com"){
//     console.log("please enter your password");
// } else {
//     console.log("please enter your email id");
// }
if (email != ""){
    console.log("please enter your password");
} else {
    console.log("please enter your email id");
}


console.log(Boolean(email));

const email1 = "ab@google.com";
const password1 ="1235689";
if(email1){
    if(password1){
        console.log("welcome to the app");
    }
    else{
        console.log("please enter the password");
    }
}else{
    console.log("please enter the your email id");
}
if(email && password1){
    console.log("please welcome to the app");
}else{
    console.log("please enter your email and password");
}

const googleLogInToken ="";
const githubLogInToken ="";
if(githubLogInToken || googleLogInToken){
    console.log("welcome to the app");
} else{
    console.log("please view your website");
}

let age = 19;
const willYouGetDrivingLicence = false;
(age >= 18) ? willYouGetDrivingLicence = true : willYouGetDrivingLicence = false;
