a()
// function statement aka function declaration
// this is hoisted
function a() {
    console.log('a called!')
}

a()

// function expression
// this is not hoisted
// b()

const b = function() {
    console.log('b called!')
}

b()

// anonymous function - a function without a name
// this will throw a syntax error
// function () {

// }

// named function expression
const b = function xyz() {
    console.log('b called!')
}

// this will throw a reference error
// xyz()

// difference between parameters and arguments
// arguments are whats passed in, params are what are defined
// parameters are num and string
function take123(num, string) {
    if (num !== 123) throw TypeError('num must be 123.')

    return num + " " + string
}

// arguments are 123 and 'seven'
take123(123, 'seven')

// first class functions - the ability to use functions as values...eg
const doStuff = () => console.log('doing stuf...')

// arrow functions
const doMoreStuff = () => console.log('hello. this is an arow function!')