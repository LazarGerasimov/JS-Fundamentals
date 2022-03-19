function furniture(input) {

    let totalSum = 0;


    console.log("Bought furniture: ");

    for (let line of input) {
        if(line === "Purchase") {
            break;
        }

        let regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
        let result = regex.exec(line);
        //console.log(result)

        if (result !== null) {
            //console.log(result.groups.price);
            //console.log(result.groups.quantity);

            totalSum += Number(result.groups.price) * Number(result.groups.quantity);
            console.log(result.groups.name);
        }
    }

    console.log(`Total money spend: ${totalSum.toFixed(2)}`)

}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)