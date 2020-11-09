{
    const prompt = require('prompt-sync')({sigint: true});
    const year = prompt('Enter the year ');
    if((year+'').length == 4 && year%4==0){
        if(year%400){
            console.log(year+' is Leap Year.');
        }
        else{
            if(year%100){
                console.log(year+' is not a Leap Year.');
            }
            else{
                console.log(year+' is a Leap Year');
            }
        }
    }
    else{
        console.log(year+" is not a Leap Year");
    }
}