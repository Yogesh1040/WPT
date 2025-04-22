function evenOdd(num){
    if(num % 2 == 0){
        return `${num} is a Even Number`;
    }
    else{
        return `${num} is a Odd Number`;
    }
}

module.exports = evenOdd;