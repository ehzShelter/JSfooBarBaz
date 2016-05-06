### function

> Functions are just not functions

1. Method
2. Class
3. Constructor
4. Module

and more ...


#### function expression

    function
    optional name
    parameter
    body

> Produces an instance of a function object
> function objects are first class
> >> May be passed as an argument to a function
> >> May be returned from a function
> >> May assigned to a variable
> >> May be stored in an object or array
##### Function objects inherit from

    Function.prototype

#### var statement

> It gets split into two parts:
1. >> The declaration part gets hoisted to the top of the function , initializing with undefined
2. >> The initialization part turns into an ordinary assignment.


           var myValue = 0, othersValue;

>>>>>> Expands into

>>> HOISTING AT TOP of the .js file

        var myValue = undefined, othersValue = undefined;
        ..

        myValue = 0;




