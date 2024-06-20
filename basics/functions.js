function addTwo(num1, num2){
    return num1+num2;

    console.log("fasd") // note: this will not print, as this statement is written after return.
}
console.log(addTwo(9,5))

//concept of rest operator.

function calculateSum(...val){ // ... here is working as a rest operator.
    return val
}
console.log(calculateSum(200,500,700,600))
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// passing objects into a function
const user1={
    username:'ary',
    price: 66
}

function callObject(anyobject){
    console.log(`Name is ${anyobject.username} and price is ${anyobject.price}.` )
}
callObject(user1)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// passing an array into a function.

const arr1=[8,7,4,1,65,5,8]

function getVal(anyarray){
    console.log(`The second value of array is ${anyarray[1]}`)
}
getVal(arr1)
// or we can pass an array itself
getVal([100,200,300,410])