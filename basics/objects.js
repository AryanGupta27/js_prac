// creating object using literal

const mySym=Symbol("key1")

const myObj={
    name:"Aryan",
    age:22,
    "full name": "Aryan Gupta",
    [mySym]:"value1", // this is the right way to use an symbol in object
    location:"Ajmer",
    email:"qwerty@ghj.com"
}
console.log(myObj.name)
console.log(myObj["full name"]) // another very important way of accessing value from objects
console.log(myObj[mySym]) // this is how the value of symbol will be accessed from object 

myObj.email="aryan@gupta.com"
console.log(myObj.email)
// Object.freeze(myObj) // with the help of this method object values cannot be changed and new props cannot be added
myObj.email="xcvbnm@ddc.com"

// console.log(myObj)

myObj.greeting=function(){ //  adding a fucntion in your object
    console.log("hola!")
}

myObj.greeting2=function(){ 
    console.log(`hola! ${this.name}`) // note: this here refers to the current object.
}
console.log(myObj.greeting2())
