{
    const prompt = require('prompt-sync')({sigint: true});
    var number = prompt("Enter Number For Day Of Week(0-Sunday to 6-Saturday): ");
    if(0<=number && number<=6){
        if(number==0){
            console.log('Sunday');
        }
        else if(number == 1){
            console.log('Monday');
        }
        else if(number == 2){
            console.log('Tuesday');
        }
        else if(number == 3){
            console.log('Wednesday');
        }
        else if(number == 4){
            console.log('Thursday');
        }
        else if(number == 5){
            console.log('Friday');
        }
        else{
            console.log('Saturdy');
        }
    }
    else{
        console.log('Invalid Digit');
    }
}