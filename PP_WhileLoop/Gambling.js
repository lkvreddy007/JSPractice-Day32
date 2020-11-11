{
    var money = 100;
    while(money != 0 && money != 200){
        let toss = Math.floor(Math.random()*10)%2;
        if(toss == 0){
            money++;
        }
        else{
            money--;
        }
    }
    if(money == 0){
        console.log("Money is zero. Please stop playing");
    }
    else{
        console.log("Maximum Profits Reached. Please Stop Playing")
    } 
}