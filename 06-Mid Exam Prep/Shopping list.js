function shoppingList(array) {
    let list = array.shift().split("!");
    let copyCommand = array.slice();
   
    for (let i = 0; i < copyCommand.length; i++) {
      if (array[i] === "Go Shopping!") {
        break;
      }
   
      let current = array[i].split(" ");
      let command = current.shift();
   
      if (command === "Urgent") {
        let item = current.shift();
   
        if (!list.includes(item)) {
          list.unshift(item);
        }
      } else if (command === "Unnecessary") {
        let item = current.shift();
   
        if (list.includes(item)) {
          let index = list.indexOf(item);
          list.splice(index, 1);
        }
      } else if (command === "Correct") {
        let oldItem = current.shift();
        let newItem = current.shift();
   
        if (list.includes(oldItem)) {
          let index = list.indexOf(oldItem);
          list.splice(index, 1, newItem);
        }
      } else if (command === "Rearrange") {
        let item = current.shift();
        if (list.includes(item)) {
          let index = list.indexOf(item);
          let change = list.splice(index, 1);
          list.push(change);
        }
      }
    }
    console.log(list.join(", "));
  }
   
  // shoppingList([
  //   "Tomatoes!Potatoes!Bread",
  //   "Unnecessary Milk",
  //   "Urgent Tomatoes",
  //   "Go Shopping!",
  // ]);
   
  shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
  ]);
   