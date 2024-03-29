let apples: number = 5; 
let speed: string = 'fast'; 
let hasName: boolean = false; 

let nothingMuch: null = null;
let nothing: undefined= undefined; 

// built in objects
let now: Date = new Date();

// Arrays 
let myNumbers: number[] = [1, 2, 3, 4]; 
let colors: string[] = ['blue', 'red', 'green']
let truths: boolean[] = [false, true, false]

// classes 

class Car {

}

let car: Car = new Car()

// Object literal 

let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

// Function 
const logNumber: (i: number) => void = (i) => {
  console.log(i)
}

// When to use annotations:
// 1) Function that returns the Any type

const json = '{"x": 10, "y": 20}'
const coordinates: {x: number, y: number} = JSON.parse(json)

console.log(coordinates)