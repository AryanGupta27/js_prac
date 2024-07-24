// browser me alone "this" ka context Window object. AUR  Node env. me empty object.

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//call: ye current execution context ko dusre function ko pass krdeta h 
function setUser(user){
    this.user=user;
}

function createUser(user, email, pass){
    setUser.call(this, user)
    this.email=email;
    this.pass=pass;
}


const u1=new createUser('ary','ary@gmail.com','778')
console.log(u1);