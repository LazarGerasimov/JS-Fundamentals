function numbers(input) {

    let numbers = input.shift().split(" ").map(Number);
    

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ")
        let command = commands[0];
        let number = Number(commands[1]);
        let indexNumber = numbers.indexOf(number)
        
        console.log(indexNumber)

        if (command === "Add") {
               numbers.push(number);
            
        } else if (command === "Remove") {
            if (indexNumber >= 0) {
                numbers.splice(indexNumber, 1);
            }

        } else if (command === "Replace") {
            if (indexNumber >= 0) {
                numbers[indexNumber] === Number(commands[2])
                
            }

        } else if (command === "Collapse") {
            numbers = numbers.filter(x => x > number);

        } else if (command === "Finish") {
            break;
        }
        
    }

console.log(numbers);

}
numbers(["21 14 2 5 -10",
//"Add 1",
//"Remove 5",
//"Collapse 2",
"Replace 5 8",
"Finish"])