//pick random person
var names= ["Akash","Anil","Arun","Dhanush","Hemanth"];
function whosPaying(names) {
var numberOfPeople= names.length;
var randomPersonPosition=Math.floor(Math.random()*numberOfPeople);
var randomPerson=names[randomPersonPosition];
return randomPerson + " is going to buy lunch Today";
}
