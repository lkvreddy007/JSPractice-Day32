function palindromeChecker(number){
    let reverse = 0;
    let num = number;
    for(let i = 1; i<=''+number.length; i++){
        reverse = (reverse*10)+(num%10);
        num = Math.floor(num/10);
    }
    if(number == reverse){
        return true;
    }
    else{
        return false;
    }
}

function primeChecker(number){
    if(number==2){
        return true;
    }
    for(let i = 2;i<=number/2;i++){
        if(number%i == 0){
            return false;
        }
        else{
            return true;
        }
    }
}

{   
    const prompt = require('prompt-sync')({sigint: true});
    let number = prompt("Enter the number.");
    if(palindromeChecker(number)){
        if(primeChecker(number)){
            console.log(number+" is both Palindrome and Prime.")
        }
        else{
            console.log(number+" is a Palindrome but not Prime.");
        }
    }
    else{
        console.log(number+" is not a Palindrome.")
    }
}