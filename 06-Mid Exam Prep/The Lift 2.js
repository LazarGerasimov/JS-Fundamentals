function theLift (input) {

    let people = Number(input[0]);
    let wagons = input[1].split(" ").map(Number);


    console.log(people)
    console.log(wagons)
    
    while (people != 0) {

        wagons = wagons.map( wagon => {
            let peopleToFit = 4 - wagon;
            if (peopleToFit > people) {
                peopleToFit = people;
            }
            people -= peopleToFit; 
            wagon += peopleToFit;
            return wagon;
        })
            
            
    }

    if (people > 0) {

        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(" "));
    } else if (wagons.some(Element => Element !== 4)) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    } else {
        console.log(wagons.join(" "));
    }

}
theLift([
    "15",
    "0 0 0 0 0"
   ]
   );

theLift([
    "20",
    "0 2 0"
   ]
   );