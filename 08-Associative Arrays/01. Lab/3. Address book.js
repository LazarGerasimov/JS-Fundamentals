function addressBook (input) {

    let result = {};

    // for every line

    for (let line of input) {
        // parse
        let [name, address] = line.split(":");
        // store
        result[name] = address;
    }
     
    //sort

    let sorted = Object.entries(result);
    sorted.sort((a, b) => {                     // sorted.sort((a, b) => a[0].localeCompare(b[0]));
        let nameA = a[0];
        let nameB = b[0];
        return nameA.localeCompare(nameB);
    });

    /* Sorting with Object.keys
    
    let sortedKeys = Object.keys(result);
    sortedKeys.sort((a, b) => a.localeCompare(b));

    Printing will be: 

    for (let name of sortedKeys) {
        console.log(`${name} -> ${result[name]}`);
    }


    */
    //print result
    for (let [name, address] of sorted) {
    console.log(`${name} -> ${address}`);
    }

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);

console.log(`----------`);

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
); 