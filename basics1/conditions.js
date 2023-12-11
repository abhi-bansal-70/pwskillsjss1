let temp = 16;
if (temp < 20){
    console.log("its really cold");
} else {
    console.log("its not really cold");
}
console.log("atmoshphere is amazing");

let score = 120;
let life = 3;
let bullets = 1000;
console.log("welcome to the game ");
if(score>=100){
    console.log("you get a new life for a game");
    score -= 100;
    life++;
    let bullets = 2000;
    console.log(`number of present bullets are ${bullets}`);
} else {
    console.log("sorry, you dont get a life");
}

console.log(`your score is ${score} and my life is ${life} and number of bullets are ${bullets}`);

let getStarfromUser = "7";
let starInNumber = parseInt(getStarfromUser);
if(starInNumber == 1){
    console.log("poor");
} else if(starInNumber == 2){
    console.log("umm,ok");
} else if(starInNumber == 3){
    console.log("average");
}else if(starInNumber == 4){
    console.log("good");
}
else {
    console.log("great");
}