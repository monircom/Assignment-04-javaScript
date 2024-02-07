// SAMPLE INPUT                                                         SAMPLE OUTPUT
// { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }        Google#kolimuddin@1999
// { name: "rahat" , birthYear: 2002, siteName: "Facebook" }            Facebook#rahat@2002
// { name: "toky" , birthYear: 200, siteName: "Facebook"}              invalid
// { name: "maisha" , birthYear: 2002 }                                 invalid

function password(obj) {

    if ((typeof obj === "object") && (Object.keys(obj).length === 3) ) {       
        let propArray = [];
        for (const prop in obj) {
                propArray.push(prop);                
            }        
        if(typeof obj["birthYear"] != "number"){
          return "Invalid";
        }
       
        let birthYearLength =  obj["birthYear"].toString().length;   
         if ((propArray[0] === "name") && (propArray[1]=== "birthYear") && (propArray[2]=== "siteName") && (birthYearLength === 4) && (obj["siteName"].length) && ((obj["name"].length)))
         {
          let strongPassword = "";
            if(obj["siteName"]){
              const objSiteName = obj["siteName"];
              let firstChar = objSiteName[0].toUpperCase();
              let restChar = "";
              const siteNameLength = objSiteName.length;
              
              if(siteNameLength>1){
              restChar = objSiteName.slice(-(siteNameLength-1)).toLowerCase();
              }
              siteNameForPass = firstChar + restChar; 
              
              strongPassword = siteNameForPass;
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


    console.log("input 1",password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
    console.log("input 2",password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }));
    console.log("input 3",password({ name: "toky" , birthYear: 200, siteName: "Facebook" }));
    console.log("input 4",password({ name: "maisha" , birthYear: 2002 }));    
    console.log("input 5",password({ name: "maisha" , birthYear: 2002 , siteName: "Facebook" , extraName: "google" }));
    console.log("input 5",password({ names: "maisha" , birthYear: 2002 , siteNames: "Facebook" }));
    console.log("input 6",password(0));
    console.log("input 7",password([]));
    console.log("input 8",password({ name: "toky" , birthYear: 2000, siteName: "" }));
    console.log("input 9",password({ name: "" , birthYear: 2000, siteName: "goo" }));
    console.log("input 10",password({ name: "toky" , birthYear: "year", siteName: "google" }));
    console.log("input 10",password({ name: "t" , birthYear: 2005, siteName: "b" }));
    console.log("input 11",password({ name: "t" , birthYear: 2005, siteName: "bb" }));


    // let student = {
    //     name: "Ariana Grande",
    //     age: 21,
    //     city: "Gaibandha",
    //     isStudent: true,
    //   };      
    //   console.log(Object.keys(student).length);
      // PS C:\Projects\Log-18\object>  node practice4.js
      // 4


    //   let myObject = {
    //     name: "John Doe",
    //     age: 25,
    //     city: "Example City",
    //     isStudent: true,
    //   };
    //   for (const prop in myObject) {
    //     console.log("key: " + prop + " | " + "type: " + typeof myObject[prop]);
    //   }

      // PS C:\Projects\Log-18\object>  node practice5.js
        // key: name | type: string
        // key: age | type: number
        // key: city | type: string
        // key: isStudent | type: boolean

 
    // const str = "abrakadabra";
    // let counter = 0;
    // for (let i = 0; i <= str.length; i++) {
    //   if (str[i] === "a") {
    //     counter++;
    //   }
    // }
    //console.log(counter + " times");
    // PS C:\Projects\Log-18\string> node practice1.js
    // 5 times
    