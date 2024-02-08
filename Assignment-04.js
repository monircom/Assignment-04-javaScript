
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


function checkName(name) {

    const goodLetters = "Ayieouw";

    if(typeof name === "string"){
        const lastChar = name[name.length-1];
        for (const goodLetter of goodLetters) {
                if(lastChar.toLowerCase() === goodLetter.toLowerCase()){
                    return "Good Name";
                }
            }
            return "Bad Name";
        }
    else {
        return "Invalid";
    }
}

function deleteInvalids(array) {

    let newArray = []; 
        if(Array.isArray(array)){
            for(const element of array){
                if((typeof element === "number") && (!isNaN(element)) ){
                    newArray.push(element);
                }
            }
            return newArray;
        }
        else {
            return "Invalid Array";
        }
}


function password(obj) {

    if ((typeof obj === "object") && (Object.keys(obj).length === 3) ) {      
              
        if(typeof obj["name"] !== "string"){
              return "Invalid";
        }
        if(typeof obj["siteName"] !== "string"){
              return "Invalid";
        }        
            if(typeof obj["birthYear"] !== "number"){
          return "Invalid";
        }

        let birthYearLength =  obj["birthYear"].toString().length;

        let propArray = [];
        for (const prop in obj) {
                propArray.push(prop);                
            }  
        
         if ((propArray[0] === "name") && (propArray[1]=== "birthYear") && (propArray[2]=== "siteName") && (birthYearLength === 4) && (obj["siteName"].length) && ((obj["name"].length)))
         {
          let strongPassword = "";
            if(obj["siteName"]){
              const objSiteName = obj["siteName"];
              let firstChar = objSiteName[0].toUpperCase();            
              let restOfChars = objSiteName.slice(1).toLowerCase();             
              strongPassword = firstChar + restOfChars;
            }
            strongPassword = strongPassword+'#'+obj["name"]+'@'+obj["birthYear"];            
            return strongPassword;
         }
         else {
            return "Invalid";
         }
    }
    else {
        return "Invalid";
    }    
}


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

