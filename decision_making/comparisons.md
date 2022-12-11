
> // greater than 
< // less than
>= // greater than or equal to
<= // less than or equal to
== // equality check
!= // not equal
=== // strict equality
!== // strict  non-equality


10 > 1; // true
0.2 > 0.3; // false
-10 < 0; // true
50.5 < 5; // false
0.5 <= 0.5; // true
99 >= 4 //true
'a' < 'b' //true
'A' < 'a'; //false

EQUALITY OPERATORS

** == // double equals **
checks for equality of value, but not equality of type.
it coerces both values to the same type and returns the same result.
this can lead to some unexpected results.

1 == 1; //true
1 == '1'; those are not the same type but it coerces them to the same type printing true.

** === // TRIPLE equals
CHECKS FOR EQUALITY OF VALUE AND TYPE.

5 === 5; // true
1 === 2; // false
2 === '2'; // false
false === 0; // false