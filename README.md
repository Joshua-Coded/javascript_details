# javascript_details

Primitive types are
Number
String
Boolean
Null
Undefined


Technically there are two other primitive types
** symbol and bigint

<------->

1. Number types
javascript have one number type
positive number types
negative number types
whole number types
decimal number types

50 7 3.98 -634 are all number types.

<------------>

NAN -- NOT A NUMBER
is a numeric value that represents something that is not a number.
it is considered a number by javascript.
consider writing typeof NaN in the console ans see what you will get.


2. Boolean primitive types
IT IS EITHER TRUE OR FALSE

3. String types
"Strings of characters"

Strings are another primitive type in JavaScript. they represents text and must be wrappped in quotes.

let favAnimal = "Dumbo Octopus";
let username = "your name";

you can use both double quotes and single quotes

** Strings are indexed. 
every characters in the string starts from 0.
accessing the string, YOU CAN use a square bracket before the variable name.


** String Methods **
methods are built in actions we can perform with individual variables Strings
they help us do things like:
    searching within a string
    replacing part of a string
    changing the casing of a string

    syntax of the string methods
    
    thing.method()
     
    common methods
    
    toLowerCase()
    toUpperCase()
    Trim() for removing whitespaces


** String Methods arguments **
some methods accept arguments that modify their behavior.
think of them as input we can pass in.
we pass these arguments inside the parentheses.

thing.method(arg)
example
indexof(arg)
slice(arg)
replace(arg)
repeat(arg)

** String Template Literals **
To use the string Literals make use of the back tick character with curly brackets.
` I counted {3 +5 } `


** Null and undefined **
Null: intentional absence of a value, must be assigned
Undefined: variables that do not have an assigned value


** TRUTHY AND FALSY VALUES **
All JS values have an inherit truthyness and falsyness about them.

Falsy values are::
FALSE
0
" " EMPTY String
 Null
 Undefined
 NAN

....... ** EVERYTHING ELSE IS TRUTHY!! ** ......  