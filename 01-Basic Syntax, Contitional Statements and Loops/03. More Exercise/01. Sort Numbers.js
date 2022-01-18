function sortNumbers(number1, number2, number3) {

    let myNewArr = [];

    myNewArr.push(number1);
    myNewArr.push(number2);
    myNewArr.push(number3);

    myNewArr.sort((a,b) => b - a);

    console.log(myNewArr.join("\n"));
    

    
}
sortNumbers(2,1,3);