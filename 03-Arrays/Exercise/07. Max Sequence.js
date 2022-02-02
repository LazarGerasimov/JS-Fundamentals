function maxSequence (arr) {

   let newArray = [];
   let firstArray = [];

   for (i = 0; i < arr.length; i++) {
       let firstArray = [];
       for (let j = i; j < arr.length; j++) {
           if (arr[i] === arr[j]) {
               firstArray.push(arr[j]);
           } else {
               break;
           }
           if (firstArray.length > newArray.length) {
               newArray = firstArray;
           }
       }
   }

        console.log(newArray.join(" "))
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])