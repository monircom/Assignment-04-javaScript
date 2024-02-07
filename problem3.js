
// SAMPLE INPUT                                                             SAMPLE OUTPUT
// [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]        [ 1, 18, -19 ]
// [“1” , {num:2} , NaN ]                                                   []
// [ 1 , 2 , -3 ]                                                           [ 1, 2, -3 ]
// {num: [ 1 , 2 , 3 ]}                                                     “Invalid Array”

// (you can give your own error message)


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



    console.log(`[1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] =>>>`,deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));    
    console.log(`["1" , {num:2} , NaN ] =>>>`,deleteInvalids(["1" , {num:2} , NaN ]));
    console.log(`[ 1 , 2 , -3 ] =>>>`,deleteInvalids([ 1 , 2 , -3 ]));
    // deleteInvalids(["1" , {num:2} , NaN ]);
    // deleteInvalids([ 1 , 2 , -3 ]);
    console.log(`{num: [ 1 , 2 , 3 ]} =>>>`,deleteInvalids({num: [ 1 , 2 , 3 ]}));
    console.log(`0`,deleteInvalids(0));