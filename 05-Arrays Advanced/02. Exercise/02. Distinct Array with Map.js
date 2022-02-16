function distinctArray (array) {

    let newArray = [];

    array.map((currNum) => {
        if (!newArray.includes(currNum)) {
            newArray.push(currNum);
        }
    });
    console.log(newArray.join(" "));

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);