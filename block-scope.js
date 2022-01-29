// this is actually perfectly valid javascript - this is a block!
// {
        // grouped statements
//     var a = 10
//     console.log(a)
// }

// ! this throws 'SytnaxError: unexpected end of input'
// javascript expects either a single line or a grouped statement here (a block)
// if (true)

// same code as above
// the if statement needs a block
if (true) {
    // grouped statements
    var a = 10
    console.log(a)
}

// ...so what is block scope?
{
    // var has global scope, eg you can access it outside of this block
    var x = 10

    // let and const are only scoped to this block
    let y = 20
    const z = 21

    // works just fine
    console.log(x)
    console.log(y)
    console.log(z)

    // cool stuff
}

// ! throws 'ReferenceError: y is not defined'
// console.log(x)
// console.log(y)
// console.log(z)

// ...so what is shadowing?
var f = 100
let g = 500

{
    // prints 100
    console.log(f)

    // ! throws 'ReferenceError: Cannot access 'g' before initialization'
    // console.log(g)

    // this var 'shadows' the var in the outer scope 
    // that means it is pointing to the same location in memory
    // eg reassigning it will reassign the var it is shadowing (f above)
    var f = 20

    // let does NOT shadow vars from outer scopes
    // it has block scope
    let g = 3

    // prints 20
    console.log(f)

    // prints 3
    console.log(g)
}

// this also returns 20 now.
console.log(f)

// this still retuns 500
console.log(g)