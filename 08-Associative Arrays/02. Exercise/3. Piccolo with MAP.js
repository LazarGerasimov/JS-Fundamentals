function piccolo(input) {

    let parking = new Map();
  
      
  
      for (let line of input) {
  
          let [command, number] = line.split(", ");
  
          if (command == "IN") {
              parking.set(number, 1)
          } else {
              parking.delete(number, 1)
          }
      }
  
      if (parking.size == 0) {
          console.log("Parking Lot is Empty")
      } else {
     
      let result = Array.from(parking.keys());
     result.sort();
  
      for (let car of result) {
          console.log(car)
      }
  }
  }
  piccolo(['IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU']
  );