// strings
const name="Ary"

const newname=new String("Aryyq-werty") // another way to declare a string. (this will return as a object)
// console.log(newname);


// // there are various different methods/fucntions in js. we can get them on mdn docs or in browser console.
// console.log(newname.charAt(2))
// console.log(newname.indexOf('y'))
// console.log(newname.slice(-10,7))

// console.log(newname.replace('A', 'Z'))
// console.log(newname.split('-')) // this will split the string into array.
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

//DATE and TIME

// let d= new Date();
// console.log(typeof d);
// console.log(d);
// console.log(d.toDateString());
// console.log(d.toLocaleString());

// let time=Date.now()
// console.log(time);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Arrays
let arr1=[4,12,4,8,5]
let arr2= new Array(7,6,34,53,63,25)
// methods in array
arr2.push(100)
// console.log(arr2)

// let newArr=arr1.join()
// console.log(arr1)
// console.log(newArr) // this is in string type
// console.log(typeof newArr)

// slice and splice(there is a important difference between them. Kindly look the output of both the function before & after using in array )
console.log("A", arr2)
const a=arr2.slice(1,3)
console.log(a)

console.log("B", arr2)
const b=arr2.splice(1,3)
console.log(b)

console.log("C", arr2) // in this the all the elements that b array contains will be removed.
// splice methods overwrites the origuinal array. 

