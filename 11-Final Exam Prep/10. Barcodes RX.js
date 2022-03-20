function barcodes(input) {

    let productCount = Number(input.shift());

    let pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let digitsPattern = /\d/g;

    for (let piece of input) {
        let match = pattern.exec(piece);
        let productGroup = "";
        
        
        if (match) {
        let product = match.groups.product
        let digits = product.match(digitsPattern);
            
            if (digits === null) {
                console.log(`Product group: 00`)
            } else {
                digits = digits.join("");
                console.log(`Product group: ${digits}`)
            }

        } else {
            console.log(`Invalid barcode`)
        }

    }

}
barcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
console.log(`=======`)
barcodes((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
)
