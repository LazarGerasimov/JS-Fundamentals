function imitationGame(input) {

    let message = input.shift();
  
    for (let i = 0; i < input.length; i++) {
      let tokens = input[i].split("|");
      let command = tokens[0];
      let p1 = tokens[1];
      let p2 = tokens[2];
  
      if (command === "Move") {
        let left = message.slice(0, p1);
        let right = message.slice(p1);
        let text = right + left;
        message = text;
        //console.log(text)
  
      } else if (command === "Insert") {
          let start = message.slice(0, p1);
          let end = message.slice(p1);
          message = start + p2 + end;
        
      } else if (command === "ChangeAll") {
        
          message = message.split(p1).join(p2);
        
      } else if (command === "Decode") {
        console.log(`The decrypted message is: ${message}`)
        
      }
  
    }
     
  }