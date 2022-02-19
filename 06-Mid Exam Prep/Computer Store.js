function computerStore(input) {
    
    let sumParts = 0; 
    let taxes = 0;
    let totalPrice = 0;
    
    let isCustomerSpecial = false; 
    
    for (let i = 0; i < input.length; i++) {
        
        let command = input[i];
        
        if (Number(command) < 0) {
            console.log(`Invalid price!`)
            continue;
        }
        
        if (command === "special") {
            isCustomerSpecial = true;
            break;
        } else if (command === "regular") {
            break;
        } else {
            sumParts += Number(command);
            taxes += Number(command) * 0.20;
        }
        
    }
    
    
    let priceWithTax = sumParts + taxes;
    
    if (sumParts <= 0) {
        console.log(`Invalid order!`)
    }
    
    if (isCustomerSpecial) {
        priceWithTax = 0.90 * priceWithTax;
    } 
    
    if (sumParts > 0) {
        
    
    console.log(`Congratulations you've just bought a new computer!\n Price without taxes: ${sumParts.toFixed(2)}$ \n Taxes: ${taxes.toFixed(2)}$\n -----------\n Total price: ${priceWithTax.toFixed(2)}$
    
    `)
    }
   
}