//Fizz buzz challenge
var output=[];
var count=1;
function fizzbuzz() {
output.push(count); 
 count++;
 if(count% 3 ===0 && count%5 ===0){
  output.push("fizzbuzz");
 }
 else if(count%3 === 0){
  output.push("fizz");
 }
 else if(count%5 === 0)
 {
  output.push("buzz");
 }
 else{
  output.push(count)
 }
 count++;
 console.log(output);
}


//using While loop
var output=[];
var count=1;
function fizzbuzz() {
    while(count<=100){
 if(count% 3 ===0 && count%5 ===0){
  output.push("fizzbuzz");
 }
 else if(count%3 === 0){
  output.push("fizz");
 }
 else if(count%5 === 0)
 {
  output.push("buzz");
 }
 else{
  output.push(count)
 }
 count++;
 console.log(output);
    }
}
