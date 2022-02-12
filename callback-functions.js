// what is a callback function in javascript?

// its up to x when to execute its passed in callback
function x(y) {
    console.log('x')
    y()
}

x(function () {
    console.log('y')
})

setTimeout(function () { console.log('timer up!')}, 5000)

// javascript is a synchronous and single-threaded language
// js can only do one thing at a time, and in a specific order

// blocking the main thread

// the call stack essentially IS the main thread

// power of callbacks

// deep about event listeners
// when this event occurs, the passed in cb is added to the call stack 
// document.getElementById('clickme').addEventListener("click", function () { console.log('clicky clicky!') })

// closures demo with event listeners
// but what about if we want to track how many times this event occurs? form a closure!
function attachEventListeners() {
    let count = 0

    document.getElementById('clickme').addEventListener( 'click', function () { console.log("button clicked: ", ++count) } )
}

attachEventListeners()

// scope demo with event listeners

// garbage collection and removeEventListeners

// why do we need to remove event listeners? they are heavy on memory!