{
    const prompt = require('prompt-sync')({sigint: true});
    var a = prompt("Enter Numberfor a: ");
    var b = prompt("Enter Numberfor b: ");
    var c = prompt("Enter Numberfor c: ");

    var operation1= a+b*c;
    var operation2= a%b+c;
    var operation3= c+a/b;
    var operation4= a*b+c;

    var arr = [operation1,operation2,operation3,operation4];
    var max = Math.max(...arr);
    var min = Math.min(...arr);

    function cases(name,val){
        console.log(name+' is : ');
        if(val == operation1){
            console.log('a+b*c = '+val);
        }
        else if(val == operation2){
            console.log('a%b*c = '+val);
        }
        else if(val == operation3){
            console.log('c+a/b = '+val);
        }
        else{
            console.log('a*b+c = '+val);
        }
    }

    cases("Max",max);
    cases("Min",min);
}