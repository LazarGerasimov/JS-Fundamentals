function heroes(input) {

    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let heroData = input.shift().split(" ");
        let name = heroData[0];
        let hp = Number(heroData[1]);
        let mp = Number(heroData[2]);
        
        heroes[name] = {          // !!!!!!!!!!!!!!
            hp,
            mp
        }

    }
    
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];
        let hero = heroes[name];    // !!!!!!!!!!!!

        //console.log(name, hero)

        if (command === "CastSpell") {
           if (hero.mp >= p1) {
                hero.mp -= p1;
                console.log(`${name} has successfully cast ${p2} and now has ${hero["mp"]} MP!`)   // or hero.mp
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`)
            }

        } else if (command === "TakeDamage") {
            hero.hp -= p1;
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${p2}!`);
            }

        } else if (command === "Recharge") {
            let mp = Math.min((200 - hero.mp), p1);
            hero.mp += mp;
            console.log(`${name} recharged for ${mp} MP!`);

        } else if (command === "Heal") {
            let hp = Math.min((100 - hero.hp), p1);
            hero.hp += hp;
            console.log(`${name} healed for ${hp} HP!`);

        } else if (command === "End") {
            break;
        }
    }
    // print result
    for (let heroData of Object.entries(heroes)) {
        let name = heroData[0];
        let hero = heroData[1]; 
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`)
    }

}
heroes(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])