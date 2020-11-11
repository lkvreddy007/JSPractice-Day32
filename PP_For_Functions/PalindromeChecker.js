function palindromeChecker(number){
    let reverse = 0;
    var num = number;
    for(let i = 1; i<=''+number.length; i++){
        reverse = (reverse*10)+(num%10);
        num = Math.floor(num/10);
    }
    if(number == reverse){
        console.log(number+" is a Palindrome.");
    }
    else{
        console.log(number+" is not a Palindrome.")
    }
}

{   
    const prompt = require('prompt-sync')({sigint: true});
    var number1 = prompt("Enter the first number.");
    var number2 = prompt("Enter the second number.");
    palindromeChecker(number1);
    palindromeChecker(number2);
}