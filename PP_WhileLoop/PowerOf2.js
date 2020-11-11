{
    const prompt = require('prompt-sync')({sigint: true});
    const number = Number(prompt('Enter the number '));
    console.log("Powers Of 2");
    var i=0;
    while((i<=number)&&(Math.pow(2,i)<=256)){
        console.log(Math.pow(2,i));
        i++;
    }
}