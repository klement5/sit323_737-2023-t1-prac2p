var adder = function(first,second){
    var sum = first + second;
    return sum;
}

var log = function(msg){
    console.log(msg);
}

log("Hello world");
log("The sum is " + adder(5,6));