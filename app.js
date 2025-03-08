
let arr = [ 
    {
        name : "Priti",
        marks : 90
    } , 
    {
        name : "Rakesh",
        marks : 98
    } , 
    {
        name : "Rahul",
        marks : 85
    } ,
    {
        name : "Rani",
        marks : 80
    } ,
    {
        name : "Ruchi",
        marks : 92
    } ,
    {
        name : "Ram",
        marks : 96
    } ];

//forEach method
arr.forEach((ele)=>{
    console.log(ele.marks);
});

//map method
let gpa = arr.map((ele)=>{
    return ele.marks/10;
});
console.log(gpa);

//filter method
let oustanding = arr.filter((ele)=>{
    return ele.marks>=90;
});
console.log(oustanding);

//every method
let even = [2,4,6,8];
let val = even.every((ele)=>{
    return ele%2 == 0 ;
});
console.log(val);

//some method 
let odd = [1,2,3,4];
let checkOdd = odd.some((ele)=>{
    return ele%2 != 0 ;
});
console.log(checkOdd);

// reduce method
let numbers = [1,2,3,4];
let sum = numbers.reduce((acc,ele)=> {
    console.log(acc);
    return acc+ele ;
});
console.log(sum);

//find maximum in array using reduce method
let max = numbers.reduce((acc,ele)=> {
    if(ele>acc)
        return ele;
    else
        return acc;
});
console.log(max);

//check if all numbers in an array are multiple of 10 or not.
//all numbers means every number 
let array = [10,20,30];
let multiple = array.every((ele)=> ele%10 == 0 );
if(multiple)
    console.log("All array elements are multiple of 10");
else
console.log("All array elements are not multiple of 10");

//create a function to find minimum number in an array.
let min = numbers.reduce((acc,ele)=>{
    if(acc<ele)
        return acc;
    else
        return ele;
});
console.log(min);









