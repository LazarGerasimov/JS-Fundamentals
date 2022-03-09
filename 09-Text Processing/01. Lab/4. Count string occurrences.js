function censored (text, word) {

    let tokens = text.split(" ");
    let counter = 0; 
  
    for (let token of tokens) {
        if (token == word) {
          counter++;
        }
    }
  
    console.log(counter)
    
  }