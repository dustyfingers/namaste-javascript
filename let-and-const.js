
// ! throws 'ReferenceError: x is not defined'
// console.log(x)

// ! throws 'ReferenceError: cannot access a before initialization' (var is in temporal dead zone)
// console.log(a)

// returns undefined!
// console.log(b)

// let and const declarations ARE hoisted but not like youd think
let a = 10
const c = 5

// global var declarations are actually attached to the window object
// for example in the browser console, you can access window.b
// but not a or c from above!
var b = 100

console.log(a)
console.log(c)
console.log(b)

// ! this throws 'SyntaxError: Identifier a has already been declared'
// let a = 19
// instead just reassign a, eg
a = 19

// this is perfectly valid in javascript however
var b = 50


console.log(a)
console.log(b)

// const is even more strict than let, eg the same as let above, but...

// ...you cant initialize a const variable to be empty
// ! this throws 'SyntaxError: missing initializer in const declaration'
// const g

// ...and you cant reassign a const variable at all
// ! this throws 'TypeError: assignment to constant variable'
// c = 10