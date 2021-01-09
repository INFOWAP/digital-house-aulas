function ePrimo(num){
    var cont = 0;
    var x;
    for(x=1;x<=num;x++){
        if(num% x==0){
            cont++;
        };
    };
    if(cont==2){
        return console.log(`${num} é primo!`);
    }else{
        return console.log(`${num} não é primo!`);
    }
};
ePrimo(10);