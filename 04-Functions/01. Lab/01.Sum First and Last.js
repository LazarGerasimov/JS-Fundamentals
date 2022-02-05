function sumFirstPlusLast (input) {

    let first = input.shift();
    let last = input.pop();

    console.log(Number(first) + Number(last));

}
sumFirstPlusLast(["5", "10"])
