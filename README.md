# Advanced methods of Javascript Array

<h3>forEach: arr.forEach(some function definition or name )</h3>
Function will get executed for each array element.

<h3>Map : 
Let newArr = arr.map( some function definition or name )</h3>
Function will get executed for each array element.
Return new array of same size.

<h3>Filter : 
Let newArr = arr.filter( some function definition or name )</h3>
Function will get executed on each element and acts as a filter.
Function will return either true or false.
If it’s true then element will get added in new array if false then element will not get added in new array.

<h3>Every : ( very similar to logical AND operator )</h3>
Return true if every element of array elements gives true for some function else reurn false.
Arr.every( some function definition or name ) // returns true or false

<h3>Some : ( very similar to logical OR operator )</h3>
Returns true if some of array elements gives true for function else return false.
Arr.some( some function definition or name ) // returns true or false.

<h3>Reduce : </h3>
It reduces the array to a single value.
Arr.reduce( reducer function with two arguments for ( accumulator , element )).
Accumulator will keep final result.