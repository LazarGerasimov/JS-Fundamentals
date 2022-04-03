function solve1(input) {

    let text = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "Translate") {
            let char = p1;
            let replacement = p2; 
            text = text.split(char).join(replacement);
            console.log(text)

        } else if (command === "Includes") {
            let index = p1;
            let isIncluded = text.includes(index);
            if (isIncluded) {
                console.log(`True`);
            } else {
                console.log(`False`)
            }

        } else if (command === "Start") {
            let startString = p1; 
            let isStarted = text.startsWith(startString);
            if (isStarted) {
                console.log(`True`)
            } else {
                console.log(`False`)
            }

        } else if (command === "Lowercase") {
            text = text.toLocaleLowerCase();
            console.log(text)
            // toLocaleLowerCase
        } else if (command === "FindIndex") {
            let textArr = text.split("");
            let char = p1;
            let index = 0;
            for (let i = textArr.length - 1; i >= 0; i--) {
                if (textArr[i] === char) {
                    let foundIndex = textArr.indexOf(char);
                    index = foundIndex;
                    break;
                }
            }
            console.log(index)

        } else if (command === "Remove") {
            let startIndex = Number(p1); 
            let count = Number(p2);
            let left = text.slice(0, startIndex);
            let right = text.slice(startIndex + count);
            text = left + right; 
            console.log(text)

        } else if (command === "End") {
            break;
        }
    }
}
solve1(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]
);