function extractFile (input) {

    let nameTokens = input.split("\\");
    let nameFile = nameTokens.slice(-1);
    let nameAsString = nameFile.toString();
    let index = nameAsString.lastIndexOf(".");
    let subName = nameAsString.substring(0, index);
    console.log(`File name: ${subName}`)
  
    let tokens = input.split(".");
    let extension = tokens.slice(-1);
    console.log(`File extension: ${extension}`);
    
  }