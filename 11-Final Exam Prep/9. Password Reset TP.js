function passwordReset(input) {

    let text = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "TakeOdd") {
            let textArr = text.split("");
            let oddArr = [];
            for (let i = 0; i < textArr.length; i++) {
                //console.log(charIndex)
                if (i % 2 != 0) {
                    oddArr.push(textArr[i]);
                }                
            }
            let oddText = oddArr.join("");
            text = oddText;
            console.log(text);


        } else if (command === "Cut") {
            let index = Number(p1);
            let length = Number(p2);
            let left = text.slice(0, index);
            let right = text.slice(index + length);
            text = left + right;
            console.log(text);


        } else if (command === "Substitute") {
            let subString = p1;
            let substitute = p2; 
            let ifIncludes = text.includes(subString);
            if (ifIncludes) {
                text = text.split(subString).join(substitute);
                console.log(text)
            } else {
                console.log(`Nothing to replace!`)
            }

        } else if (command === "Done") {
            console.log(`Your password is: ${text}`)
        }

    }

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
)