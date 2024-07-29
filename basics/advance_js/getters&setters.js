// for a fine-grained access we use getters and setters

class User{
    constructor(email, password){
        this.email=email;
        this.password=password
    }
    // getter and setters are set on variables or properties and then they are converted into methods

    get password(){
        return this._password.toUpperCase(); // we are overriding the value of password by forcefully changing it. (we have change  the name of variable)
    }
    // NOte: if get is used then set will be in use. Both have to declare

    set password(value){
        this._password=value; // we are overriding the value of password by forcefully changing it. (we have change the name of variable)
        // setters will never return anything.
    }
}

const obj1=new User("aear@gmail.com","fadsa");
console.log(obj1.password);