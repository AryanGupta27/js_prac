// this represents the current context.

const user={
    name:"Aryan",
    price:98,
    welcomeMsg:function(){
        console.log(`Username is: ${this.name}`)

        console.log(this) // referencing to the parent method 
    }
}
user.welcomeMsg()
user.name="ssa"; // we change the value
user.welcomeMsg()

console.log(this) // NOTE: here this will give an empty ovject coz, we are in node environmnet.
//But if we run this in our browser console then it will refernce to Window object.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function abc(){
    let user="ary"
    console.log(this) // it will print all the default

    console.log(this.user) // but this will undefined; coz this will only work in object context

}
abc();
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// arrow function

const afunc=()=>{
    console.log(this) // the output will be an empty object
}
afunc();

// if we use {} these brackets then we have to use return keyword, but if we use () then return is not required.

// const addTwo=(num1, num2)=>{ return num1+num2}
// console.log(addTwo(4,5));

// const addTwo=(num1, num2)=> num1+num2 // this is also correct
// console.log(addTwo(4,5));

const addTwo=(num1, num2)=> (num1+num2)  // this is also known as implicit return; and will be very helpful in react
console.log(addTwo(4,5));

const f2=()=>({user:"aryan"})
console.log(f2())