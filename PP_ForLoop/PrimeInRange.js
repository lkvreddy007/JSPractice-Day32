{
    const prompt = require('prompt-sync')({sigint: true});
    const start = Number(prompt('Enter the start number for Range '));
    const end = Number(prompt('Enter the end number for Range '));
    var arr = [];
    for(let i = start; i<=end; i++){
        if(i==2){
            arr.push(2);
        }
        let b = false;
        for(j = 2; j<i ;j++){
            if(i%j==0){
                break;
            }
            else{
                b = true;
            }
        }
        if(b){
            arr.push(i);
        }
    }
    console.log("Prime numbers in range of "+start+", "+end+" are: "arr);
}