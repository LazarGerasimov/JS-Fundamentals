function englishName (input) {

    let inputAsString = String(input);

    if (inputAsString.length == 1) {
        if (inputAsString[0] == 0) {
            console.log(`zero`);
        } else if (inputAsString[0] == 1) {
            console.log(`one`);
        } else if (inputAsString[0] == 2) {
            console.log(`two`);
        } else if (inputAsString[0] == 3) {
            console.log(`three`);
        } else if (inputAsString[0] == 4) {
            console.log(`four`);
        } else if (inputAsString[0] == 5) {
            console.log(`five`);
        } else if (inputAsString[0] == 6) {
            console.log(`six`);
        } else if (inputAsString[0] == 7) {
            console.log(`seven`);
        } else if (inputAsString[0] == 8) {
            console.log(`eight`);
        } else if (inputAsString[0] == 9) {
            console.log(`nine`);
        }
}
    if(inputAsString.length > 1) {
        if (inputAsString[inputAsString.length - 1] == 0) {
            console.log(`zero`);
        } else if (inputAsString[inputAsString.length - 1] == 1) {
            console.log(`one`);
        } else if (inputAsString[inputAsString.length - 1] == 2) {
            console.log(`two`);
        } else if (inputAsString[inputAsString.length - 1] == 3) {
            console.log(`three`);
        } else if (inputAsString[inputAsString.length - 1] == 4) {
            console.log(`four`);
        } else if (inputAsString[inputAsString.length - 1] == 5) {
            console.log(`five`);
        } else if (inputAsString[inputAsString.length - 1] == 6) {
            console.log(`six`);
        } else if (inputAsString[inputAsString.length - 1] == 7) {
            console.log(`seven`);
        } else if (inputAsString[inputAsString.length - 1] == 8) {
            console.log(`eight`);
        } else if (inputAsString[inputAsString.length - 1] == 9) {
            console.log(`nine`);
        }
    }
    
}
englishName(10922302);