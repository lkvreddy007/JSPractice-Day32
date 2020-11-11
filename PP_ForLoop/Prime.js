{
    const prompt = require('prompt-sync')({sigint: true});
    const number = Number(prompt('Enter the number '));
    if(number>1){
        for(let i = 2; i<number; i++){
            if(number%i === 0){
                console.log(number + " is not a Prime Number.");
                return;
            }
            else{
               
            }
        }
        console.log(number + " is Prime Number.");
    }
    else{
        console.log("Enter a number greater than 1.")
    }
}