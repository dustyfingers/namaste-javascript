function x() {

    // waits three seconds, then executes the passed in callback function
    // this cb function forms a closure - eg it takes the reference to 'i' with it!
    // setTimeout(function() { console.log(i) }, 3000)
    // // this doesnt wait three seconds to execute!
    // // calls to setTimeout are NOT async
    // console.log('this is being executed')

    // but what about printing 1 after 1 second, then 2 after 2 seconds, etc on to 5?

    // ! naive way (does NOT work)
    // for (var i = 1; i < 6; i++)
    // {

    //     // the js engine sets this function aside with a timer on it, and moves to the next execution step
    //     // EXCEPT! the reference to i is updated to 5 SO QUICKLY, that before the callback function fires,
    //     // the value in the memory space that i is referring to is already 5
    //     // so you get an output of 5, 5, 5, 5, 5
    //     setTimeout(function() { console.log(i) }, i * 1000)

    // }

    // * correct way using let
    for (let i = 1; i < 6; i++)
    {

        // the js engine sets this function aside with a timer on it, and moves to the next execution step
        // this works as expected - each instance of i is referencing a different place in memory, and thus a different value
        // the setTimeout() callback, each time around, forms a new closure with this new variable
        // so it remembers its value later...and the output is as expected!
        setTimeout(function() { console.log(i) }, i * 1000)

    }

    // * correct way using var
    for (var i = 1; i < 6; i++)
    {

        // the js engine sets this function aside with a timer on it AND a binding to this val variable and its value
        // and moves to the next execution step
        function close(val) {
            setTimeout(function() { console.log(val) }, val * 1000)
        }

        close(i)

    }

}

x()