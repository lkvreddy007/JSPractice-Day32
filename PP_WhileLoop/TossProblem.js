{
    var heads = 0;
    var tails = 0;
    while(heads<11 && tails<11){
        let toss = Math.floor(Math.random()*10)%2;
        if(toss == 0){
            heads++;
        }
        else{
            tails++;
        }
    }
    if(heads == 11){
        console.log("Heads was tossed 11 times");
    }
    if(tails == 11){
        console.log("Tails was tossed 11 times")
    }
}   