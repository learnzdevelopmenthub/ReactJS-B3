import add, {sub, div} from "./math.js"
import mul from "./new.js"

// Destructuring

// array destrucring
const numbers = [1,2,3]

const [first, second, third] = numbers

// object destructuring

const user = {name: 'John', age: 30}
const { name, age } = user 

// rest and spread
// ...

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]

console.log(arr2)

const obj1 = {a:1, b:2}
const obj2 = {...obj1, b:3, c:4}

console.log(obj2)


// rest

function hello(...numbers) {
    console.log(numbers)
    const extraNumbers = [...numbers, 5, 6, 7]
}

hello(1, 2, 3, 4)



// use imported function
console.log(add(1,2))
console.log(sub(3,1))
console.log(div(10,2))
console.log(mul(3,2))