const p1= new Promise(function(resolve, reject){
    // ANy async task such as: DBcalls, cryptography, network calls, setTimeout

    setTimeout(function(){
        console.log('Async task is completed');
    },1000)
})