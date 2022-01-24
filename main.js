let romanToInt = (romanNumber) => {
    let romanNumberList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    var result = 0;

    for (let i = 0; i < romanNumber.length; i++) {
        if (romanNumberList[romanNumber[i]] < romanNumberList[romanNumber[i + 1]]) {
            result += romanNumberList[romanNumber[i + 1]] - romanNumberList[romanNumber[i]];
            i++;
        }else {
            result += romanNumberList[romanNumber[i]]
        }
    }

    return result
};

romanToInt('LVIII')