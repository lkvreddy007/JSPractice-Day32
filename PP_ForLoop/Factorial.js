{
    const prompt = require('prompt-sync')({sigint: true});
    const number = Number(prompt('Enter the number '));
    let fact = 1;
    if(number==0){
        fact = 1;    
    }
    else if(number>0){
        for(let i = number; i>0 ;i--){
            fact = fact *i;
        }
    }
    else{
        console.log("Enter Positive Value.");
        return;
    }
    console.log("Factorial of "+number+" is "+fact);
}