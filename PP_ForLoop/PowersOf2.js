{
    const prompt = require('prompt-sync')({sigint: true});
    const number = Number(prompt('Enter the number '));
    console.log("Powers Of 2");
    for (var i=0;i<number;i++){
        console.log(Math.pow(2,i));
    }
}