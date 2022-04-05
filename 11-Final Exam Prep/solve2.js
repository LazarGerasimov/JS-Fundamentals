function solve2(input) {

let pattern = /!([A-Z][a-z]{3,})!:\[([A-Za-z]{8,})\]/;

let count = Number(input.shift());

for (let token of input) {
    
    let match = pattern.exec(token);
    
    
    if (match) {
        let command = match[1];
        let stringMatch = match[2];
        let matchArr = stringMatch.split("");
        let numbersArr = [];
        

        
        for (let char of matchArr) {
            let charCode = char.charCodeAt();
            numbersArr.push(charCode);
        }
        
        console.log(`${command}: ${numbersArr.join(" ")}`)

        

    } else {
        console.log(`The message is invalid`)
    }


}




}
solve2(["3",
"go:[outside]",
"!drive!:YourCarToACarWash",
"!Watch!:[LordofTheRings]"])
;