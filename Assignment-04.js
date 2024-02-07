
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


