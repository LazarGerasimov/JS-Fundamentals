function reverseString(input) {

    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        newArr.push(input[i])
    }

    let reversedArr = newArr.reverse().join("");

    console.log(reversedArr);
}
reverseString("Hello")