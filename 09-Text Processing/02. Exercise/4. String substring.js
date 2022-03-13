function subString(word, text) {

    let lowerWord = word.toLowerCase();
    let lowerText = text.toLowerCase();
  
    let edited = lowerText.split(" ");
  
    let isFound = false;
    
    for (let element of edited) {
      //console.log(element)
      if (lowerWord == element) {
        isFound = true;
        console.log(`${word}`);
        break;
      } 
    }
  
    if(!isFound) {
      console.log(`${word} not found!`)
    }
    
  }