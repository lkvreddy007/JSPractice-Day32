var numbers = [];

for(var i = 0; i<5 ;i++){
    numbers[i] = Math.floor(Math.random()*(999-100))+100;
    console.log(numbers[i]);
}

var min = Math.min(...numbers);
var max = Math.max(...numbers);
console.log("Max value in numbers is "+max);
console.log("Min value in numbers is "+min);