//BMI CALCULATOR
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
function bmiCalculator(weight,height){
    var bmi=weight/(height*height);
    return Math.round(bmi);
}
var bmi=bmiCalculator(65,1.8);
console.log(bmi);
