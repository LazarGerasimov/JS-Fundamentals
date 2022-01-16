function solve(a, b) {

    let sum = 0;
    let sequence = "";


    for (let i = a; i<=b; i++) {
        
        sum+= i;
        sequence+= i + " ";

    }
    
    console.log(sequence);
    console.log(`Sum: ${sum}`);
}
solve(5, 10)