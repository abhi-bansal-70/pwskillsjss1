function processArray(array,fn){
    for (let i = 0; i < array.length; i++) {
        console.log("index =>",i,"index value =>",array[i],"function return the value =>",fn(array[i]));
        
    }

}
processArray([3,2,6,8,1,4],function cube(x){return x*x*x;})