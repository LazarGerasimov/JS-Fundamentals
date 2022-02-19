function arrayModifier (input) {

    let nums = input.shift().split(" ").map(Number);
    
    while (input[0] != "end") {
        let tokens = input.shift().split(" "); 
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        if (tokens[0] === "swap") {
            let temp = nums[index1];
            nums[index1] = nums[index2];
            nums[index2] = temp;

        } else if (tokens[0] === "multiply") {
            nums[index1] = nums[index1] * nums[index2];

        } else if (tokens[0] === "decrease") {
            for (let i = 0; i < nums.length; i++) {
                nums[i] = nums[i] - 1;
            }
        }
    }
    
    console.log(nums.join(", "))
}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  ); 