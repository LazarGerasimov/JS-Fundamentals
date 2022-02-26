function storeProvision (availableStock, deliveredStock) {
    
    let storedProducts = {};
    let store;
    
    for (let i = 0; i < availableStock.length; i+=2) {
        let currentProduct = availableStock[i];
        
        storedProducts[currentProduct] = Number(availableStock[i + 1]);
        
    }
    
    for (let i = 0; i < deliveredStock.length; i+=2) {
        let currentProduct = deliveredStock[i];
        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0
        }
        storedProducts[currentProduct] += Number(deliveredStock[i + 1]);
    }
    
    for (let product of Object.keys(storedProducts)) {
        console.log(`${product} -> ${storedProducts[product]}`)
    }
    
    
    
}