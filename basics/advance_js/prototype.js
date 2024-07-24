let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){ // this hitesh method will be in all objects, arrays and fuctions.(as we are creating it on the parent object)
    // as all arrays, objects, strings parent is object only; so they all will have this property 
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){ // this heyHitesh method will be applicable only on the arrays only. 
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// learn more about this