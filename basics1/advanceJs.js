function processArray(array,fn){
    for (let i = 0; i < array.length; i++) {
        console.log("index =>", i, "index value",array[i],"function return the value",fn(array[i]);
        
    }

}
processArray([1,2,3,4,5,6,7,8,9],function cube(x){return x*x*x;})