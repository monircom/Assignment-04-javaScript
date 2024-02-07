
// SAMPLE INPUT     SAMPLE OUTPUT
// 10               300
// 1055             125700
// 93               10260
// -130             “Invalid Number”

// (you can give your own error message)


function calculateMoney(ticketSale) {
 
    if (typeof ticketSale === "number"){
        if (ticketSale >= 0){
            let income = ( ticketSale * 120) - ( 500 + (8 * 50) );
            return income;
        }
        else {
            return "Invalid Number";
        }
        
    }    
    else {
        return "Invalid Input";
    }
}

// Sample Input

console.log('10',calculateMoney(10));
console.log('1055',calculateMoney(1055));
console.log('93',calculateMoney(93));
console.log('-130',calculateMoney(-130));
console.log('1',calculateMoney(1));
console.log('0',calculateMoney(0));
console.log('""',calculateMoney(""));
console.log('[]',calculateMoney([]));
console.log('{}',calculateMoney({}));
