function numbers (input) {

    let numbers = input.split(" ").map(Number);
    let sumNumbers = 0;

    for (i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i];
    }

    let averageValue = sumNumbers / numbers.length;
    

    let biggerThanAverage = [];

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > averageValue) {
            biggerThanAverage.push(numbers[i]);
        }
    }

    let sortedBigger = biggerThanAverage.sort((a, b) => b - a);

    if (sortedBigger.length > 5) {
        sortedBigger.length = 5; 
    }

    if (biggerThanAverage.length == 0) {
        console.log(`No`)
    } else {
    console.log(sortedBigger.join(" "))
    }
}
numbers('10 20 30 40 50 60 80 150 200 300 21 42 52 62 72 72 71 80 812 50 20 15 8 9 6 4 2 1 2 4');
numbers('1 1 1 1 1 1')