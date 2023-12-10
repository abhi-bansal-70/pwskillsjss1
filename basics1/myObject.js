const user = {
    name: "abhishek",
    age : 20,
    gender : "male",
    email : "abhishekbansal7055@gmail.com",
    address: {
        city : "mathura",
        state :"uttar pradesh",
        pinCode:"281004"
    }
}

console.log(user.age);
console.log(user[`age`]);
console.log(user[`address`][`state`]);

user.email = "ab@gmail.com"
console.log(user.email)

console.log(Object.keys(user));
console.log(user.hasOwnProperty("address"));
console.log(Object.entries(user));
