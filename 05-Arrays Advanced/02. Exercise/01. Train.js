function train(train) {

    let passengersInWagons = train.shift().split(" ").map(Number);
    let maxCapacity = Number(train.shift());

    for (let command of train) {
        let currentCommand = command.split(" ");
        if (currentCommand[0] === "Add") {
            passengersInWagons.push(Number(currentCommand[1]));
        } else {
            for (let i = 0; i < passengersInWagons.length; i++) {
                if (passengersInWagons[i] + Number(currentCommand[0]) <= maxCapacity) {
                    passengersInWagons[i] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }

    console.log(passengersInWagons.join(" "));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);