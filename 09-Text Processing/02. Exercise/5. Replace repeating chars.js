function replaced(input) {

    let charsArr = input.split("");
    
    let uniqueArr = [];
    
      for (let i = 0; i < charsArr.length; i++) {
        let currentChar = charsArr[i];
        let nextChar = charsArr[i + 1];
    
        if (currentChar !== nextChar) {
          uniqueArr.push(currentChar)
        } 
      }
     
      console.log(uniqueArr.join(""))
    }