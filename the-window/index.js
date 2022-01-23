console.log('hello there ;)')

var a = 10;

function b() {
    var x = 10;
}

// after memory allocation phase (where a = undefined) this variable is attached to the window obj
// it exists in the global execution context
console.log(window.a)
console.log(window)
console.log(a)

// in the global execution context, 'this' points to the window object
console.log(this.a)
console.log(this)
console.log(a)
