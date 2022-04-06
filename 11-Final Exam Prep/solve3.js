function solve3(input) {

    let dictionary = {};

    
    let definitions = input.shift().split(" | ");

    for (let element of definitions) {
        let tokens = element.split(": ");
        let name = tokens[0];
        let meaning = tokens[1];
      
    
        if (!dictionary.hasOwnProperty(name)) {
            dictionary[name] = {
            name: name,
            meaning: []  
        }
        dictionary[name].meaning.push(meaning);

        } else {
        dictionary[name].meaning.push(meaning);
        }
        
    }

    //console.log(dictionary)
    
    let testingWords = input.shift().split(" | ");
    let command = input[0];
    

    if (command === "Test") {
        
      let entries = Object.entries(dictionary);
              
            

        for (let word of testingWords) {
            
          
              let test = entries[0][1];
              let testEntries = Object.entries(test);
              let meaningEntry = testEntries[1][1];
              
              console.log(meaningEntry)
            
            if (dictionary.hasOwnProperty(word)) {
              
                console.log(`${word}:`)
              
                for (let char of meaningEntry) {
                    //console.log(`-${char}`)
                }
                
            }
        }
        
    } else if (command === "Hand Over") {
        let wordsHandedOver = Object.entries(dictionary);
        let handedOverArr = [];
        
        for (let wordName of wordsHandedOver) {
            handedOverArr.push(wordName[0]);
            
        }
        console.log(handedOverArr.join(" "))
        
    }

}
solve3(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"]); 



//solve3(["programmer: an animal, which turns coffee into code | developer: a magician",
    //"fish | domino",
    //"Hand Over"]);

//console.log(`==================`)


/*solve3(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"]); */

//console.log(`=================`)


