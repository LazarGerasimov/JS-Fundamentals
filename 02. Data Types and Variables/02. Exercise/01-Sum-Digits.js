function digits (num) {

    let result = 0;

    let numAsString = String(num);

    for (let i = 0; i < numAsString.length; i++) {
        result+= Number(numAsString[i]);
    }

    console.log(result)
}
digits(245678)


//    numAsString.split("").forEach(function(char) {
//    sum+=Number(char);
//    });


//         numAsString.split("").map(function(char){
    //    sum+=Number(char)
//         });
