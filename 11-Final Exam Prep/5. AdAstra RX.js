function adAstra (input) {

    let text = input[0];
    let regex = /([#]|[|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<caloriesNum>[0-9]{1,5})\1/g;
  
    let match = null;
    let totalCalories = 0;
    let provisions = [];
  
    while (match = regex.exec(text)) {
        //console.log(match.groups)
  
      let item = match.groups['itemName'];
      let expirationDate = match.groups['expirationDate'];
      let calories = match.groups['caloriesNum'];
  
      totalCalories += Number(calories);
      provisions.push(`Item: ${item}, Best before: ${expirationDate}, Nutrition: ${calories}`)
    }
      let daysToLast = Math.floor(totalCalories / 2000);
      console.log(`You have food to last you for: ${daysToLast} days!`);
      console.log(provisions.join("\n"))
  }