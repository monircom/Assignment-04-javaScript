// SAMPLE INPUT                             SAMPLE OUTPUT
// [ 1000 , 2000 , 3000 ] , 5400            0
// [ 1000 , 2000 , 2500 ] , 5000            500
// [ 900 , 2700 , 3400] , 10000             "earn more"
// 100, [ 900 , 2700 , 3400]                invalid input




function monthlySavings(array , livingCost) {
   
        if ((Array.isArray(array)) && (typeof livingCost === "number") && (!isNaN(livingCost)) && (array.length>0) ) {
        
            let tax = 0 ;
            let totalIncome = 0 ;
            let savings = 0 ;
            for(const money of array){
                if((typeof money === "number") && (!isNaN(money)) ){                  
                   totalIncome = totalIncome + money;
                   if (money >= 3000){
                    tax = tax + (money * ( 20 / 100 ));
                   }          
                }
                else {
                    return "invalid input";
                }
            }          
         savings =   totalIncome - tax - livingCost;         
         if (savings >= 0){           
            return savings;
         }
         else {
            return "Earn More";
         }
        }
        else{
            return "invalid input";
        }    
    }


console.log("input 1 : " , monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log("input 2 : " , monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log("input 3 : " , monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log("input 4 : " , monthlySavings(100, [ 900 , 2700 , 3400]));
console.log("input 5 : " , monthlySavings([ 1000 , 2000 , 3000 ] , NaN));
console.log("input 6 : " , monthlySavings("" , 5400));
console.log("input 7 : " , monthlySavings([ 900 , 2700 , 3400 , 5000 , 4000 ] , 10000));
console.log("input 8 : " , monthlySavings([ 900 , "aaa" , 3400 , 5000 , 4000 ] , 10000));
console.log("input 9 : " , monthlySavings([ 10000 ] , 5000));
console.log("input 10 : " , monthlySavings([  ] , 5000));
console.log("input 11 : " , monthlySavings([ NaN ] , 5000));
console.log("input 12 : " , monthlySavings([ 10353 ] , 5000));
console.log("input 12 : " , monthlySavings([ 100 ] , 5000));