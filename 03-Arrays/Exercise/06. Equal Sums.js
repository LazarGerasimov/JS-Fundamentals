function equalSums(arr) {

    let isEqual = false; 
    
    for (i = 0; i < arr.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (j = i - 1; j >= 0; j--) {
            leftSum+=arr[j];
        }

        for (k = i + 1; k < arr.length; k++) {
            rightSum+=arr[k];
        }

        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i)
            break;

        }
    }

    if (!isEqual) {
        console.log(`no`)
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);