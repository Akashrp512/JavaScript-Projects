//fibonacci generator using for loop
function fibonacciGenerator(n);{
var output=[];
if(n===1){
    output[0];
}
else if(n===2){
    output=[0,1]
}
else{
    output=[0,1];
    for(var i=2;i<n;i++){
        output.push(output[output.length-2]+output[output.length-1]); //[0,1,1]
    }
    
}
return output;
}
fibonacciGenerator(5); //vary the n value

//fibonacci sequence using if-else condition
var output=[];
if(n===1){
    output[0];
}
else if(n===2){
    output=[0,1]
}
else{
    output=[0,1];
    output.push(output[output.length-2]+output[output.length-1]); //[0,1,1]
    if(n===output.length){

    }
    else{
        output.push(output[output.length-2]+output[output.length-1]);
    }
}
return output;
