function rotation (array, rotation) {

    for (let i = 0; i < rotation; i++) {
        let currentNum = array.shift();
        array.push(currentNum);
    }

    console.log(array.join(" "))
}
rotation([51, 47, 32, 61, 21], 2)