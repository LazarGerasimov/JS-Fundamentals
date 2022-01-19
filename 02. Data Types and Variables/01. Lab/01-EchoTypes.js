function echo (param) {

    //print data type
    //print value, if type string or number
    // otherwise, print error message

    let type = typeof(param);
    console.log(type)

    if (type == `string` || type == `number`) {

        console.log(param)
    } else {
        console.log(`Parameter is not suitable for printing`)
    }
}
echo(`Hello, Javascript`);
echo(18);
echo(null);