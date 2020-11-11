{
    const prompt = require('prompt-sync')({sigint: true});
    const number = Number(prompt('Enter the number '));
    var sum = 0;
    for(let i = 1; i<= number; i++){
        sum += 1/i;
    }
    console.log(number+"th Harmonic number is "+sum);
}