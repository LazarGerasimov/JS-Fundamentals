function weekday(dayAsNumber) {

    if (dayAsNumber < 1 || dayAsNumber > 7) {
        console.log(`Invalid day!`);
    } else {

        let daysArray = [
            "Monday", 
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ]; 

        let index = dayAsNumber - 1; 

       console.log(daysArray[index])
    }
}
weekday(3)