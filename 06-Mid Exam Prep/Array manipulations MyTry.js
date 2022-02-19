function arrManipulation(input) {

let array = input.shift().split(" ").map(Number);

for (let i = 0; i < input.length; i++) {
    let command = input[i].split(" ");
    let action = command[0];
   
    if (action === "Add") {
        array.push(command[1]);
    
    } else if (action === "Remove") {
        array = array.filter(num => num !== Number(command[1]));

    } else if (action === "RemoveAt") {
        array.splice(command[1], 1)

    } else if (action === "Insert") {
        array.splice(command[2], 0, command[1]);
   }
   
   

}
console.log(array.join(" "))
}
arrManipulation(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)