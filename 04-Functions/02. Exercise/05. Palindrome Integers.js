function palindrome(inputArr) {

    let arrOfNums = inputArr;

    function isPalindrom(number) {
        let startNum = number;
        let reversedNum = (number.toString().split("").reverse().join(""));

        if (startNum == reversedNum) {
            return true;
        } else {
            return false;
        }
    }
     
    for (i = 0; i < arrOfNums.length; i++) {
        let currentNumber = arrOfNums[i]; 
        console.log(isPalindrom(currentNumber))
    }
}
palindrome([123, 323, 421, 121])