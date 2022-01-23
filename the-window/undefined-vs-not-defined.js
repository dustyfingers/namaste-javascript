// undefined is a placeholder value that takes up memory in the current execution context
// not defined means something hasnt been allocated memory at all in the current execution context

// a is undefined because the js engine has gone through the memory allocation step for the creation 
// of this execution context (in this case, the global execution context)
// it just hasnt assigned any value into that memory
console.log(a)

var a = 7

// now 'a' has been assigned a value
console.log(a)

// b is just plain not defined anywhere in this execution context's scope
// it is not defined
// this kills the js engine
// console.log(b)

// js is dynamically typed, which allows you to change the type of a value after it is created
a = "this is a string!"
console.log(a)

a = { wow: "cool! now this is an object!" }
console.log(a)

// dont assign to undefined. its a keyword in js and is extremely bad practice
// however it is valid js and will not crash the js engine (unlike calling a value that is not defined, like above on line 17)
// a = undefined;
// console.log(a)