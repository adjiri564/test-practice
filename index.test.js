
import {capitalize, reverseString, calculator, caesarCipher,analyzeArray} from "./index.js";

describe('capitalize', ()=>{
    it("should return the first letter of a string capitalized", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
    it("works with empty strings", () =>{
        expect(capitalize("")).toBe("");
    });
})

describe('reverseString', ()=>{
    it("reverse a single-character string", ()=>{
        expect(reverseString("a")).toBe("a");
    });
    it("reverse short string", ()=>{
        expect(reverseString("hello")).toBe("olleh");
    })
    it("reverse long string", ()=>{
        expect(reverseString("hello world")).toBe("dlrow olleh");
    })
})

describe("calculator", ()=>{
    it("should add two numbers", ()=>{
        expect(calculator.add(2, 3)).toBe(5);
    });
    it('adds negative numbers', () => {
        expect(calculator.add(-2, -3)).toBe(-5);
    });
    it('subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
    it('subtracts negative numbers', () => {
        expect(calculator.subtract(-2, -3)).toBe(1);
    });
    it('subtracts negative numbers', () => {
        expect(calculator.subtract(-2, -3)).toBe(1);
    });
    it('multiplies negative numbers', () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
    });
    it('divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });
    it('divides negative numbers', () => {
        expect(calculator.divide(-10, -2)).toBe(5);
    });
    it('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrowError("Cannot divide by zero");
    });
})

describe("caesarCipher", () => {
    it("shifts letters to the right", () =>{
        expect(caesarCipher("hello", 1)).toBe("ifmmp");
    });
    it("shifts letters to the left", () => {
        expect(caesarCipher("hello", -1)).toBe('gdkkn');
    });
    it("shifts uppercase letters", () => {
        expect(caesarCipher("HELLO", 1)).toBe("IFMMP");
    });
})

// analyzeArray.test.js

describe('analyzeArray', () => {
    it('should return an object with the correct properties', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = analyzeArray(arr);
        expect(result).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
    });
    
    it('should handle an array with a single element', () => {
        const arr = [5];
        const result = analyzeArray(arr);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1,
        });
    });
    it('should handle an array with negative numbers', () => {
        const arr = [-1, -2, -3, -4, -5];
        const result = analyzeArray(arr);
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 5,
        });
    });

    it('should handle an array with decimal numbers', () => {
        const arr = [1.5, 2.5, 3.5, 4.5, 5.5];
        const result = analyzeArray(arr);
        expect(result).toEqual({
            average: 3.5,
            min: 1.5,
            max: 5.5,
            length: 5,
        });
    });
});