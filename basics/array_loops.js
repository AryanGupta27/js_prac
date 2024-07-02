// for of(array, map, string)

const arr1=[1,2,3,4,5,6,7]
const str1="hwllo w"

for (const i of arr1) {
    console.log(i)
}

const map1= new Map();
map1.set('tn', 'TAmilnaud')
map1.set('rj', 'rajasthan')

for(const [key,value] of map1){
    console.log(`Key is ${key} and its value is ${value}`)
}

// for in (it will pick keys/indexes) and mainly used for objects.  

const myobj={
    js:'javascript',
    cpp: 'C++',
    jk:'asdfasdfa'
}

for (const key in myobj) {
    console.log(key)
    console.log(myobj[key])

}

// for-each (very useful and important)

const arr2=['js','cpp','py','jv']
arr2.forEach((element) => { // for each is a higher order function means it will always accept a callback function as a parameter.
    console.log(element)
});