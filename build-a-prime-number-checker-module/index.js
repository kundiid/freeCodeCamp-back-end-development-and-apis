 function isPrime(number){

    if ( number === 0 || number ===1){
        return false;
    }

    let  i=2
    while( i<= Math.sqrt(number)){
        if(number % i === 0){
            return false;
        }
        i++;
    }
    return true;
};

module.exports = {
    isPrime    
}