function tempConverter(){
    const prompt = require('prompt-sync')({sigint: true});
    var choice = Number(prompt("Enter 1 to convert from degC to degF.2 to convert from degF to degC."));
    let temp = Number(prompt("Please enter the temperature to Convert ")); 
    let degF = 0;
    let degC = 0;
    switch(choice){
        case 1:
            if(0<=temp && temp<=100){
                degF = (temp*9/5)+32;
                console.log(temp+" degC = "+degF+" degF");
            }
            else{
                console.log("Temp should be between 0 degC and 100 degC.");
            }
            break;
        
        case 2:
            if(32<=temp && temp<=212){
                degC = (degF - 32)*5/9;
                console.log(temp+" degF = "+degC+" degC");
            }
            console.log("Temp should be between 32 degF and 212 degF.");
            break;
        
        default:
            console.log("Invalid Entry.");
    }
}

tempConverter();