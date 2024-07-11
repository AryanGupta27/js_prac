const form=document.querySelector('form')

// const height=parseInt(document.querySelector('#height').value) // this usecase will give empty value; i.e humesha form k event k andr declare krenge

form.addEventListener('submit', (e)=>{
    e.preventDefault() // form k default method ko hum rok rhe h

    const height=parseInt(document.querySelector('#height').value) // input text ki value chaiye isliye .value use kiya, vo value string m aayegi isliye usko int m convert kr rhe h
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    
    if(height=== '' || height<0 || isNaN(height)){
        result.innerHTML='Please enter valid height!'
    }
    else if(weight=== '' || weight<0 || isNaN(weight)){
        result.innerHTML='Please enter valid weight!'
    }
})