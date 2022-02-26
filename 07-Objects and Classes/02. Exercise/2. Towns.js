function towns(input) {
    
    
    let finalResult = {};
    
    for (let tokens of input) {
            let info = tokens.split(" | ")
            let townName = info[0];
            let latitude = Number(info[1]).toFixed(2);
            let longitude = Number(info[2]).toFixed(2);
            finalResult.town = townName; 
            finalResult.latitude = latitude;
            finalResult.longitude = longitude;
            
            console.log(finalResult)
    }
    
}