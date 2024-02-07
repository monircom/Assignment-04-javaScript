// SAMPLE INPUT     SAMPLE OUTPUT
// Salman           Bad Name
// RAFEE            Good Name
// Jhankar          Bad Name
// 199              invalid
// [“Rashed”]       invalid


function checkName(name) {

    const goodLetters = "Ayieouw";

        if(typeof name === "string"){
            const lastChar = name[name.length-1];
            for (const goodLetter of goodLetters) {
                    if(lastChar.toLowerCase() === goodLetter.toLowerCase()){
                        return `Good Name`;
                    }
                }
                return `Bad Name`;
            }
        else {
            return `Invalid`;
        }

    }

    //A, y, i , e , o , u, w
    console.log('Salman',checkName("Salman"));
    console.log('RAFEE',checkName("RAFEE"));
    console.log('Jhankar',checkName("Jhankar"));
    console.log('199',checkName(199));
    console.log('[“Rashed”]',checkName(["Rashed"]));
    console.log('wow',checkName("wow"));
    console.log('A',checkName("A"));
    console.log('y',checkName("y"));
    console.log('ererere',checkName("ererere"));
    console.log('oooo',checkName("oooo"));
    console.log('iii',checkName("iii"));
    console.log('uuuu',checkName("uuuu"));
    console.log('BBBb',checkName("BBBb"));
    console.log('xccccC',checkName("xccccC"));
    console.log('{}',checkName({}));
    console.log('[]',checkName([]));