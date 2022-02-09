function passwordValidation (password) {

    // length between 6 and 10 characters
    // should contain letters and digits only
    // must have at least 2 digits

    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10; 
    }

    function isOnlyLettersAndDigits(stringPassword) {
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0);
            if (
            !(currChar >= 65 && currChar <= 90) && 
            !(currChar >= 97 && currChar <= 122) &&
            !(currChar >= 48 && currChar <= 57)) {
                return false; 
            } 
        }
                return true;
    }

    function isHavingAtLeastTwoDigits(stringPassword) {
        let counter = 0; 
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                counter++; 
            }
        }

        return counter >= 2 ? true : false;
    }

    let isLenghtValid = isLengthEnough(password);
    let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
    let isAtLeastTwoDigits = isHavingAtLeastTwoDigits(password);

    if (isLenghtValid && isLettersAndDigitsOnly && isAtLeastTwoDigits) {
        console.log(`Password is valid`);
    }

    if (!isLenghtValid) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!isLettersAndDigitsOnly) {
        console.log(`Password must consist only of letters and digits`);
    }

    if(!isAtLeastTwoDigits) {
        console.log(`Password must have at least 2 digits`)
    }
}
passwordValidation('MyPass123');