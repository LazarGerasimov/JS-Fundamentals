function gladiator (input) {
   
    let gear = input.shift().split(" "); 
    
    

    for (let i = 0; i < input.length; i++) {
       let tokens = input[i].split(" ");
       let command = tokens[0];
       let item = tokens[1];
       let isBoughtAlready = gear.includes(tokens[1]);
       
        if (command === "Buy") {
            
            if (!isBoughtAlready) {
                gear.push(tokens[1]);
            }
            
        } else if (command === "Trash") {
            let index = gear.indexOf(item);
                if (index >= 0) {
                    gear.splice(index, 1);   
                }
            
        } else if (command === "Repair") {
            if(isBoughtAlready) {
                let repairedItemIndex = gear.indexOf(item);
                gear.splice(repairedItemIndex, 1);
                gear.push(tokens[1]);        
            }
            
        } else if (command === "Upgrade") {
            itemUpg = item.split("-");
            let weapon = itemUpg[0];
            let weaponIndex = gear.indexOf(weapon);
            if (weaponIndex >= 0) {
            let UpgWeaponToInsert = `${weapon}:${itemUpg[1]}`
            gear.splice(weaponIndex + 1, 0, UpgWeaponToInsert);
            }   
        } 
    }
    console.log(gear.join(" "))    
}
gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

)