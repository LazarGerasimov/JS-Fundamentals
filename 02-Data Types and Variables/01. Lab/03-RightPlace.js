function rightPlace(par1, par2, par3) {

    let result = ""; 

    for (let i = 0; i < par1.length; i++) {
        if (par1[i] == "_") {
            result += par2
        } else { 
            result += par1[i];
        }
    }
    

    if (result == par3) {
        console.log(`Matched`)
    } else {
        console.log(`Not Matched`)
    }
    
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');

