// class is keyword in js

// class User{
//     constructor(username, email, password){ // constructor will be called automatically whenever a object is created with new keyword
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }


//     encryptPassword(){ // it is a method(basically a function) but when we declare it in the class it doesn't require function keyword.
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return this.username.toUpperCase();
//     }
// }

// const obj1=new User('ary','ary@gmail.com','qwerty')
// console.log(obj1.encryptPassword());
// console.log(obj1.changeUsername());

// below is the behind the scene how the above code works when classes were not introduced.
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());