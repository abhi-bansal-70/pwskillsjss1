let rating = "7";
let ratingInNum = parseInt(rating);

switch (ratingInNum) {
    case 1:
        console.log("poor");
        break;

    case 2:
        console.log("umm,ok");
        break;
    case 3:
        console.log("average");
        break;

    case 4:
        console.log("good");
        break;
    case 5:
            console.log("cool");
            break;
    
    case 6:
            console.log("amazing");
            break;    
    case 7:
        console.log("awesome");
        break;

    case 8:
        console.log("nailed it");
        break;
        default:
            console.log("dont get the any rating");
            break;
}