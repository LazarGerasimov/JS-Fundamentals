function oddOccurrences(input) {

    let words = input.split(" ");
    let result = {};

    for (let word of words) {

       word = word.toLocaleLowerCase();

        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

  filtered = Object.entries(result).filter(([word, count]) => {
    if (count %2 == 1) {
      return true;
    } else {
        return false;
    }
});

// filtered = Object.entries(result).filter(([word, count]) => count % 2 == 1);          one line
    // or 
//  filtered = Object
// .entries(result)
// .filter(([word, count]) => count % 2 == 1)
// .map(entry => entry[0])
// .join(" ")
// console.log(filtered)

    // or

/*/  
    let output = [];

for (let word in result) {
    if (result[word] % 2 == 1) {
        output.push(word)
    }
//}
*/
console.log(filtered.map(entry => entry[0]).join(" "))
  
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')