{
    const prompt = require('prompt-sync')({sigint: true});
    var number = prompt("Enter Number: ");
    switch(Number(number)){    
        case 0:
            console.log('Unit');
            break;
        
        case 10:
            console.log('Ten');
            break;
        
        case 100:
            console.log('Hundred');
            break;

        case 1000:
            console.log('Thousand');
            break;
        
        case 10000:
            console.log('Ten Thousand');
            break;

        case 100000:
            console.log('Lakh');
            break;

        case 1000000:
            console.log('Million');
            break;

        default:
            console.log('Invalid Entry');
    }
}