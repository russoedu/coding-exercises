/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let hash = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }
    
    let output = [];
    let keys = Object.keys(hash).reverse();
    
    for (const key of keys) {
        let keyNum = parseInt(key);
        
        while (num >= keyNum) {
            num -= keyNum;
            output.push(hash[key]);
        }
    }
    
    return output.join('');
    
    
};
