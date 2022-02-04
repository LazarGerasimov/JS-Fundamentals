function dungeons (arr) {

   let rooms = arr[0].split("|");
   
   let HP = 100;
   let coins = 0;

   let isFinished = true; 

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
       
        if(room[0] === "potion") {
            let healedAmount = Number(room[1]);
            if(HP <= 100) {
                if (HP + Number(healedAmount) >= 100) {
                    healedAmount = 100 - HP; 
                    HP = 100; 
                } else { 
                    HP += Number(healedAmount)
                }
                console.log(`You healed for ${healedAmount} hp.`);
                console.log(`Current health: ${HP} hp.`);
            }
           
        } else if(room[0] === "chest") {
            let currentCoins = Number(room[1]);
            console.log(`You found ${currentCoins} coins.`);
            coins+= currentCoins;
        } else {
            let currentMonster = room[0];
            let attackOfMonster = Number(room[1]);
            HP -= attackOfMonster; 
            if (HP > 0) {
                console.log(`You slayed ${currentMonster}.`)
            } else {
                console.log(`You died! Killed by ${currentMonster}.`);
                console.log(`Best room: ${i+1}`);
                isFinished = false;
                break;
            }
        }
    }

    if(isFinished) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${HP}`)
    }
    

}
dungeons(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])