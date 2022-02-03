function magicSum(arr, sum) {

    let currentNumber1 = 0; 
    let currentNumber2 = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentSum = 0; 

        for (let j = i + 1; j < arr.length; j++) {

            currentNumber1 = arr[i]; 
            currentNumber2 = arr[j];

            if (currentNumber1 + currentNumber2 == sum) {
                console.log(`${currentNumber1} ${currentNumber2}`);
            }

        }


    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    )