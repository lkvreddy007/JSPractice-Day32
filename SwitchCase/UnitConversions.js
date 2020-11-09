{
    const prompt = require('prompt-sync')({sigint: true});
    var number = Number(prompt("Enter Value to Convert: "));
    var choice = Number(prompt("Enter your choice :\n"+
                                "1. Feet to Inch\n"+
                                "2. Feet to Meter\n"+
                                "3. Inch to Feet\n"+
                                "4. Meter to Feet\n"));
    switch(choice){
        case 1:
            console.log(number+" feet = "+number*12.00+" inches");
            break;
        
        case 2:
            console.log(number+" feet = "+number/3.2808+" meters");
            break;
        
        case 3:
            console.log(number+" inches = "+number/12.00+" feet");
            break;

        case 4:
            console.log(number+" Meters = "+number*3.2808+" feet")
            break;

        default:
            console.log("Invalid Entry");
    }
}