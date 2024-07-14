// for of(array, map, string)

const arr1=[1,2,3,4,5,6,7]
const str1="hwllo w"

for (const i of arr1) {
    console.log(i)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
const map1= new Map();
map1.set('tn', 'TAmilnaud')
map1.set('rj', 'rajasthan')

for(const [key,value] of map1){
    // console.log(`Key is ${key} and its value is ${value}`)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------


// for in (it will pick keys/indexes) and mainly used for objects.  

const myobj={
    js:'javascript',
    cpp: 'C++',
    jk:'asdfasdfa'
}

for (const key in myobj) {
    // console.log(key)
    // console.log(myobj[key])

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// for-each (very useful and important) 
// forEach loop does not return anything, so we cannot perform individual operations on each element.

const arr2=['js','cpp','py','jv']
arr2.forEach((element) => { // for each is a higher order function means it will always accept a callback function as a parameter.
    // console.log(element)
});

arr2.forEach(function (item){
    // console.log(item)
})

function toPrint(elem){
    // console.log(elem)
}

arr2.forEach(toPrint) // we can pass a already declared function also.

arr2.forEach((it, index, arr)=>{ // there are three parameters array value, index and array itself.
    console.log(it, index, arr);
})

// iterating in array of objects.

const myarr=[
    {
        'lang': 'javascript',
        'extension': 'js'
    },
    {
        'lang1': 'java',
        'extension': 'java'
    },
    {
        'lang2': 'python',
        'extension': 'py'
    }
]


myarr.forEach((obj)=>{
    console.log(Object.keys(obj));
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// filter: filters the data according to condition passed; It also accepts a callback function(High order function).
//NOTE: It always returns an array that will fulfill the condition.

const newArr=[1,2,3,4,5,6,7,8,9,10]
// const ot=newArr.filter((item)=>{
//     return item>5
// })

const ot=newArr.filter((item)=> item>5) // if we do not use curly braces(scope) then return keyword is not required. 
console.log(ot)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// map:- It also accepts a callback function(High order function).
 // it also returns a new array.
 //does not change the original array.

 const finalArr=newArr.map((item)=>{
    return item+10; // this will add 10 on each item of array
 })

 console.log(finalArr)

 // chaining

 const nums=newArr.map((it)=>it*10)
                  .map((it)=>it+1)
                  .filter((it) => it>51)
console.log(nums)


//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//reduce 
//method returns a single value: the function's accumulated result.
//method does not change the original array.
const myNums=[1,2,3]

const myTot=myNums.reduce((acc,currval)=>{ // acc is accumulator
    console.log(`value of acc: ${acc} and value of currval: ${currval}`)
    return acc+currval
},0) // after comma this value is initial value that is for accumulator
console.log(myTot)

const aobj=[
    {
        cname:"js",
        price:700
    },
    {
        cname:"cp",
        price:500
    },
    {
        cname:"go",
        price:200
    }
]

const re= aobj.reduce((acc,item)=>{return acc+ item.price},0)
console.log(re);