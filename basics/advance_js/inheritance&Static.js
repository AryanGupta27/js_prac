class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){ // note: if we want to access properties of parent class then its props should be passed
        super(username)// super kyword se hum parent class ki values ko bhi access bhi kr rhe h
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);



// STATIC keyword
// if we want ki kuch properties hr object k pas (vo object jo class se instantiate ho rhe h) iske liye hum un properties ko classes k andr static bna denge

//eg:
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // this method is static
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

// child object k pas bhi access nhi hoga 