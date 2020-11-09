{
    const prompt = require('prompt-sync')({sigint: true});
    var number = prompt("Enter Number For Day Of Week(0-Sunday to 6-Saturday): ");
    switch(Number(number)){
        case 0:
            console.log('Sunday');
            break;

        case 1:
            console.log('Monday');
            break;

        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;

        case 4:
            console.log('Thursday');
            break;

        case 5:
            console.log('Friday');
            break;
        
        case 6:
            console.log('Saturdy');
            break;
        
        default:
            console.log("Invalid Entry");
    }
}
