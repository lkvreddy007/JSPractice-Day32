{
    const prompt = require('prompt-sync')({sigint: true});
    var number = prompt("Enter Number: ");
        if(number==0){
            console.log('Unit');
        }
        else if(number == 10){
            console.log('Ten');
        }
        else if(number == 100){
            console.log('Hundred');
        }
        else if(number == 1000){
            console.log('Thousand');
        }
        else if(number == 10000){
            console.log('Ten Thousand');
        }
        else if(number == 100000){
            console.log('Lakh');
        }
        else if(number == 1000000){
            console.log('Million');
        }
     else{
        console.log('Invalid Entry');
    }
}