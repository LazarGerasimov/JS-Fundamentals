function integer(a, b, c) {

    let sum = a + b + c; 

    console.log(sum)


    let sumAsString = String(sum); 

    let typeOfNumber = "Integer";

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == ".") {
            typeOfNumber = "Float"; 
        
    }


// or we can do it with: 
// sum % 1 === 0 -----> Integer
// else -------> Float

}
console.log(`${sum} - ${typeOfNumber}`)
}
integer(100.7, 200, 303.3); 