function secretChat(input) {

    let text = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(":|:");
        let command = tokens[0];

        if (command === "ChangeAll") {
          let substring = tokens[1];
          let replacement = tokens[2];
          text = text.split(substring).join(replacement);
          console.log(text);                   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!

        } else if (command === "Reverse") {
            let substring = tokens[1];
            let index = text.indexOf(substring);
            
            if (index >= 0) {
              let left = text.slice(0, index);
              let right = text.slice(index + substring.length);
              text = left + right + substring.split("").reverse().join("");
              console.log(text);
            
            } else {
              console.log("error")
            }

        } else if (command === "InsertSpace") {
           let left = text.slice(0, tokens[1]);
           let right = text.slice(tokens[1]);
           text = left + " " + right;
           console.log(text);
           

        } else if (command === "Reveal") {
            console.log(`You have a new text message: ${text}`);
            break;
        }
    }
}
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]
)