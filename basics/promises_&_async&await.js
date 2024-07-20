const p1= new Promise(function(resolve, reject){
    // Any async task such as: DBcalls, cryptography, network calls, setTimeout

    setTimeout(function(){
        console.log('Async task is completed');
    },1000)
})
p1.then(function(){ // then refers to the resolve part
    console.log('Promise consumed');
})

//-------------------------------------------------------------------------------------------------------------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(' Async Task 2');
        resolve()
    },2000)
}).then(function(){
    console.log('Task 2 resolved');
})
//-------------------------------------------------------------------------------------------------------------------------------
 // jb humko kooi data pass krna ho aage ya use m lena ho us data ko
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'aryan', email:'qwert.com'}) // we can pass values also with this(any thing like object, string, function)
    },2000)
    
}).then(function(obj){ // here we are getting the value from resolve function in which we have passed a object
    console.log(obj);
})
//-------------------------------------------------------------------------------------------------------------------------------

const p4= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:'aryan', email:'qwert.com'})
        }
        else{
            reject('Error occured')
        }
    },2000)
})
p4.then((user)=>{ // here we are getting the object
    console.log(user);
    return user.username // here we are returning the username from the user object
})
.then((username)=>{ // noe we chained the then method again to receinve the username
    console.log(username)
})
.catch((err)=>{ // this is the error handling part
    console.log(err);
})
.finally(()=>{ // this will run by default
    console.log('Promise is either resolved or rejected');
}); 

//-------------------------------------------------------------------------------------------------------------------------------
// HERE WE WILL HANDLE PROMISE WITH async & await  


const p5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:'js', email:'js.com'})
        }
        else{
            reject('JS ERROR')
        }
    },2000)
})

// note we nned to handle the error case externally in async-await
// thus we will use try catch

async function handlePromise(){
    try {
        const response=await p5 // here we are waiting for p5(whatever p5 state will be whether resolve or reject) 
        console.log(response);
    } catch (error) {
        console.log(error);
    }
   
}

handlePromise() // remember to call the function