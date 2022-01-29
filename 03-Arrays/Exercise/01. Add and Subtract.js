function solve (arr) {

    let newArr = [];
    let originalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {

        let newNumber = arr[i];
        originalSum+=newNumber;

        if (newNumber % 2 == 0) {
            newNumber = newNumber + i;
            newArr.push(newNumber);
            newSum+=newNumber;
        } else {
            newNumber = newNumber - i; 
            newArr.push(newNumber);
            newSum+=newNumber;
        }   
    }

    console.log(newArr)
    console.log(originalSum)
    console.log(newSum)
}
solve([5, 15, 23, 56, 35])


// if even add value to its index position

    // if odd - substract to its value its index position

    // [5+0, 15-1, 23-2, 56 + 3.....]