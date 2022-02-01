function MaxNumber(arr) {

    let myArr = [];

    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];

        let isTopInteger = true; 

        for (j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (currentElement <= arr[j]) {
                isTopInteger = false; 
                break;
            }
        }

        if (isTopInteger) { 
            myArr.push(currentElement)
        }
    }

    console.log(myArr.join(" "))

}

MaxNumber([14, 24, 3, 19, 15, 17]);