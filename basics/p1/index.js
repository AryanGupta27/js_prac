const btns= document.querySelectorAll('.button')
// console.log(btns) this is the node list therefore we can use for-each
const body=document.querySelector('body')

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)

        if(e.target.id === 'grey'){
            body.style.backgroundColor='grey';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor='blue';
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor='purple';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor='yellow';
        }
    })
})