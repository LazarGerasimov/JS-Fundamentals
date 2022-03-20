function plantDiscovery(input) {

    let n = Number(input.shift());
    let catalog = {};

    for (let i = 0; i < n; i++) {
        //let [name, rarity] = input.shift().split("<->");                too colio for me
        let tokens = input[i].split("<->");
        let name = tokens[0];
        let rarity = Number(tokens[1]);
        
        catalog[name] = {                                       // !!!!!!!!!!!!!!!!
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0
        };        
    }

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(": ");
        let command = line[0];
        

        if (command === "Rate") {
            let pair = line[1].split(" - ");
            let name = pair[0];
            let rating = Number(pair[1]);

           if (catalog[name] != undefined) {
                catalog[name].ratings.push(Number(rating));

                let total = 0; 
                for (let rating of catalog[name].ratings) {
                    total += rating;
                }
                catalog[name].avgRating = total / catalog[name].ratings.length;

           } else {
               console.log(`error`)
           }
                

        } else if (command === "Update") {
            let pair = line[1].split(" - ");
            let name = pair[0];
            let rarity = Number(pair[1]);

            if (catalog[name] != undefined) {
                catalog[name].rarity = Number(rarity);
            } else {
                console.log(`error`);
            }


        } else if (command === "Reset") {
            let name = line[1];
            
            if (catalog[name] != undefined) {
                catalog[name].ratings.length = 0;      // quickest way to empty an array
                catalog[name].avgRating = 0;
            } else {
                console.log(`error`)
            }

            
        } else if (command === "Exhibition") {
            
        }
    }

    let sorted = Object.entries(catalog);             // for printing !
    console.log(`Plants for the exhibition:`);

    for (let [name, plant] of sorted) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`)
    }

}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);