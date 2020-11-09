{   
    const prompt = require('prompt-sync')({sigint: true});
    const month = prompt('Enter the month: ');
    const dayOfMonth = prompt('Enter the Day of Month: ');

    if(month>=3 && month<=6){
        if (month == 3){
            if (dayOfMonth >= 20){
                console.log(true);
            }
            else{
                console.log(false);
            }
        }
        else if(month == 6){
            if(dayOfMonth <= 20){
                console.log(true);
            }
            else{
                console.log(false);
            }
        }
        else{
            console.log(true);
        }
    }
    else{
        console.log(false);
    }
}