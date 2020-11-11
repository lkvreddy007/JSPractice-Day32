{
    const prompt = require('prompt-sync')({sigint: true});
    console.log("Think of a number between 1 to 100");
    var b = true;
    var low =0;
    var mid =0;
    var high =100;
    while(b){
        mid = parseInt((high+low)/2);
        var choice = prompt("If the number is less or greater than "+mid+" Enter 1 or 2 RESPECTIVELY.If equals Enter 3.");
        choice = Number(choice);
        if(choice == 1){
            high = mid;
        }
        else if(choice == 2){
            low = mid;
        }
        else if(choice == 3){
            console.log("The number is "+mid);
        }
        else{
            console.log("Enter Valid Number");
            b = false;
        }
        console.log("High: "+high+" Low:"+low);
    }
}