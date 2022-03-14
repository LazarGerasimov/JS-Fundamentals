function cutAndReverse(input) {

    let half1 = input.slice(0, input.length/2).split("").reverse().join("");
    let half2 = input.slice(input.length/2, input.length).split("").reverse().join("");
  
    console.log(half1)
    console.log(half2)
    
  }