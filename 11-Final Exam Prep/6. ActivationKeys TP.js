function activationKey(input) {

    let text = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(">>>");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];

        

        if (command === "Contains") {
            if (text.includes(p1)) {
                console.log(`${text} contains ${p1}`);
            } else {
                console.log(`Substring not found!`);
            }


        } else if (command === "Flip") {
            let caseSens = p1;
            let startIndex = p2;
            let endIndex = p3; 
            let subString = text.substring(startIndex, endIndex);
            let left = text.substring(0, startIndex);
            let right  = text.substring(endIndex);

            if (caseSens === "Upper") {
                subString = subString.toUpperCase();
                text = left + subString + right;
                console.log(text);

            } else if (caseSens === "Lower") {
                subString = subString.toLowerCase();
                text = left + subString + right;
                console.log(text);
            }


        } else if (command === "Slice") {
            let startIndex = p1; 
            let endIndex = p2; 
            let subString = text.substring(startIndex, endIndex);
            let left = text.substring(0, startIndex);
            let right = text.substring(endIndex);
            text = left + right;
            console.log(text);

        } else if (command === "Generate") {
            console.log(`Your activation key is: ${text}`)
        }

    }
    
}
activationKey((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)