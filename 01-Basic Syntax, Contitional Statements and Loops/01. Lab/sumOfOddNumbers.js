function sumOfNumbers (n) {

    let sum = 0
    
    for (let i = 1; n > 0; i = i + 2) {
        console.log(i); 
        n = n - 1;
        sum = sum + i;
    }

    console.log(`Sum: ${sum}`)

}
sumOfNumbers(5)