function inventory (input) {

    let heroes = [];

    for (let element of input) {
        let info = element.split(" / ");
        //console.log(info)
        let currHeroName = info[0];
        let currLevel = info[1];
        let currHeroItems = info[2].split(", ").join(", ");
        //console.log(hero, level, items)

        let currentHero = {
            name: currHeroName,                     // can be depricated - just hero,  
            level: currLevel,                   // level,
            items: currHeroItems                    // items
        }

        heroes.push(currentHero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );