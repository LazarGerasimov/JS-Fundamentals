function vacation (people, type, day) { 

    let totalPricePerPerson = 0;
    let totalPrice = 0;
    

    switch (type) {
        case "Students": 
            switch (day) {
                case "Friday": totalPricePerPerson = 8.45;
                break;
                case "Saturday": totalPricePerPerson = 9.80;
                break;
                case "Sunday": totalPricePerPerson = 10.46; 
                break; 
            }
        break;

        case "Business":
            switch (day) {
                case "Friday": totalPricePerPerson = 10.90;
                break;
                case "Saturday": totalPricePerPerson = 15.60;
                break;
                case "Sunday": totalPricePerPerson = 16;
                break; 
            }
        break; 

        case "Regular":
            switch (day) {
                case "Friday": totalPricePerPerson = 15;
                break;
                case "Saturday": totalPricePerPerson = 20;
                break;
                case "Sunday": totalPricePerPerson = 22.50;
                break; 
            }
        break;

        
    }

    totalPrice = totalPricePerPerson * people; 

    if (type === "Students" && people >=30) {
        totalPrice = totalPrice - totalPrice*0.15;
    }
    
    if (type === "Business" &&  people >= 100) {
        totalPrice = totalPrice - (10 * totalPricePerPerson) 
    }

    if (type === "Regular" && people >= 10 && people <= 20) {
        totalPrice = totalPrice - totalPrice * 0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30, "Students", "Sunday")
