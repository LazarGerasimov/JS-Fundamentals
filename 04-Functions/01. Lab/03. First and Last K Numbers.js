function Knumbers(arr) {

    let k = arr[0];

    let firstK = arr.slice(1, k + 1);
    let lastK = arr.slice(-k)

    console.log(firstK.join(" "));
    console.log(lastK.join(" "));

}
Knumbers([2, 7, 8, 9, 10, 11])