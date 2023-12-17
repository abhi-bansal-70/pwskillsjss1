function readMe(){
    console.log("please print these statements")
};
readMe();
(function () {
    function readMe(){
        console.log("only this is my function");
    }
    readMe();

    
}) ();
readMe();