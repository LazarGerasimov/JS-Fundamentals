function replaced (input) {

    let newArr = [];
      
    for (let i = 0; i < input.length; i++) {
  
    let ascii = input.charCodeAt(i);
    let char = input[i];
  
    if (ascii >= 65 && ascii <= 90) {
        newArr.push(", ");
        newArr.push(char);
    } else if (ascii >= 97 && ascii <= 122){
        newArr.push(char);
    } 
    }
    let trimmed = newArr.join("").trim();
    let firstIndex = trimmed.indexOf(input[0]);
    let substringed = trimmed.substring(2)
    
    
  console.log(substringed)
    
    
    
  }