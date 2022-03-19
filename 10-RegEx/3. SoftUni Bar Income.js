function solve(input) {

    let income = 0;

    while (input[0] !== 'end of shift') {
        const line = input.shift();
        const regEx = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([^\d]*)?(?<price>\d+(\.\d+)?)\$/;
        if (regEx.exec(line) !== null) {
            let { name, product, count, price } = regEx.exec(line).groups;
            count = +count;
            price = +price;

            income += price * count;
            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}