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