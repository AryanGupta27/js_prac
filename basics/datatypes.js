// strings
const name="Ary"

const newname=new String("Aryyq-werty") // another way to declare a string. (this will return as a object)
// console.log(newname);


// // there are various different methods/fucntions in js. we can get them on mdn docs or in browser console.
// console.log(newname.charAt(2))
// console.log(newname.indexOf('y'))
console.log(newname.slice(1,7)) // takes certain part and return it.

// console.log(newname.replace('A', 'Z'))
// console.log(newname.split('-')) // this will split the string into array before and after the character we paased.
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

// let newArr=arr1.join() // join method returns an array as a string, it does not change the original array.
// console.log(arr1)
// console.log(newArr) // this is in string type
// console.log(typeof newArr)

// slice and splice(there is a important difference between them. Kindly look the output of both the function before & after using in array )
// console.log("A", arr2)
// const a=arr2.slice(1,3)
// console.log(a)

// console.log("B", arr2)
// const b=arr2.splice(1,3)
// console.log(b)

// console.log("C", arr2) // in this the all the elements that b array contains will be removed.
// // splice methods overwrites the original array. 

const another_arr=[...arr1, ...arr2]; // spread operator is used to copy the elements from array
console.log(another_arr)

let f=[3,2,643,31,53,[4,43,2353,331,[25,80,7]]]
console.log(f.flat(Infinity)) // flat concatenates all the sub-array elements; infinity is the parameter which is used as a depth( how many level we have to go inside)


console.log(Array.isArray("Hitesh")) // tells whether the given value is array or not
console.log(Array.from("Hitesh")) // it converts the given value into array
console.log(Array.from({name:"Hitesh"})) // this will not convert coz, this is an object.

console.log(Array.of(1,2,3,4)) // this will convert the parameters passed into an array elements.
