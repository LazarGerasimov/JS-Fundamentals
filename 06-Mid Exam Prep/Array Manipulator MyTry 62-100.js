function arrayManipulator (numbers, commands) {

    let myArray = numbers.map(Number);

    for (let command of commands) {
        let tokens = command.split(" ");
        let currentCommand = tokens[0];

        if (currentCommand === "add") {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            myArray.splice(index, 0, element);
            
        } else if (currentCommand === "addMany") {
            let index = Number(tokens[1]);
            for (let i = 2; i < tokens.length; i++) {
                myArray.splice(index, 0, Number(tokens[i]));
                index++;
                //console.log(myArray)
            }

        } else if (currentCommand === "contains") {
            let index = Number(tokens[1]);
            let ifContains = myArray.indexOf(index);
            console.log(ifContains);

        } else if (currentCommand === "remove") {
            let index = Number(tokens[1]);
            myArray.splice(index, 1);

        } else if (currentCommand === "shift") {
            let indexMoved = tokens[1];
                for (let i = 0; i < indexMoved.length; i++) {
                    let shiftedElement = myArray.shift();
                    myArray.push(shiftedElement);
                }

        } else if (currentCommand === "sumPairs") {
            let resultPairs = [];
            if (myArray.length % 2 !== 0) {
                myArray.push(0);
            }

            for (let i = 0; i < myArray.length - 1; i += 2) {
                let tempSum = Number(myArray[i]) + Number(myArray[i + 1]);
                resultPairs.push(tempSum);
            }

            myArray = resultPairs;
        } else if (currentCommand === "print") {
            console.log(`[ ${myArray.join(", ")} ]`);
            break;
        }
    }
    

//console.log(commands)
}
arrayManipulator([1, 2, 3, 4, 5, 0], 
["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"])