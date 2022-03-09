function censored (text, word) {

    let tokens = text.split(word);
  
    console.log(tokens.join("*".repeat(word.length)));
  }



  /* 
  function censored (text, word) {

  while (text.includes(word)) {
    
  text = text.replace(word, "*".repeat(word.length));
  }

  console.log(text)
}
*/