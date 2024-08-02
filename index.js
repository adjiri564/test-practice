function capitalize(string){
    if(string.length === 0) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function reverseString(string){
    return string.split('').reverse().join('');
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        if(b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
}

function caesarCipher(str, shift){
    let result = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        //Check if it is an upper case letter
        if(char >= "A" && char <= "Z"){
            const newChar = String.fromCharCode((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26 + "A".charCodeAt(0));
            result += newChar;
        }
        //Check if it is a lower case letter
        else if(char >= "a" && char <= "z"){
            const newChar = String.fromCharCode((char.charCodeAt(0) - "a".charCodeAt(0) + shift) % 26 + "a".charCodeAt(0));
            result += newChar;
        }
        //If it is not a character keep it the same
        else{
            result += char;
        }
    }
    return result;
}

function analyzeArray(arr) {  
    const length = arr.length;  
    const min = Math.min(...arr);  
    const max = Math.max(...arr);  
    const average = arr.reduce((sum, num) => sum + num, 0) / length;  

    return {  
        average: average,  
        min: min,  
        max: max,  
        length: length  
    };  
}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}