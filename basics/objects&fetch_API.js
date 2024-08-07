// creating object using literal

const mySym=Symbol("key1")

const myObj={
    name:"Aryan",
    age:22,
    "full name": "Aryan Gupta",
    [mySym]:"value1", // this is the right way to use an symbol in object
    location:"Ajmer",
    email:"qwerty@ghj.com",
    hobbies:['zcz','afdsf']
}
// console.log(myObj.name)
// console.log(myObj["full name"]) // another very important way of accessing value from objects
// console.log(myObj[mySym]) // this is how the value of symbol will be accessed from object 

myObj.email="aryan@gupta.com"
// console.log(myObj.email)
// Object.freeze(myObj) // with the help of this method object values cannot be changed and new props cannot be added
myObj.email="xcvbnm@ddc.com"

// console.log(myObj)

myObj.greeting=function(){ //  adding a function in your object
    console.log("hola!")
}

myObj.greeting2=function(){ 
    console.log(`hola! ${this.name}`) // note: "this" refers to the current object.
}
// console.log(myObj.greeting2())
// console.log(myObj.hobbies[1])
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}

const obj3={...obj1, ...obj2} // to combine or copy the values of objects 

const obj4=Object.assign({}, obj1, obj2) // this method also copis the objects from source to destination
// console.log(obj3)
// console.log(obj4)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(Object.keys(myObj)) // this will be very important for future purpose.(it is converting our data into array so now we can loop and access them easily)
console.log(Object.values(myObj))
console.log(Object.entries(myObj)) // this will each key-value into an array

//NOTE: Data coming from the datatabse will be the array of objects, so we should know how to fetch the values from them.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Destructuring the objects

const course={
    cname:"MATHS",
    instruct:"zxc",
    price:111
}

console.log(course.cname) // this is the common way.

const{cname}=course // this how we destructured a property from the object
console.log(cname)// thus we can use only prop name
// this above concept will be helpful in Reactjs.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
// calling an api
// async function f1(){
// const res= await fetch('https://randomuser.me/api/');
// const ans=await res.json();

// console.log(ans.info.version)
// }
// f1();

// another method to call an api
// function ap(){
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//         return raw.json()
//     })    
//     .then(function(data){
//         console.log(data);
//     })
// }
// ap();