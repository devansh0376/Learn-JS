class User 
{
    constructor(username)
    {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User // teacher inheritet User class 
{
    constructor(username, email, password)
    {
        super(username) //inbult method 
        this.email = email
        this.password = password
    }

    addCourse()
    {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")
chai.addCourse()
masalaChai.logMe()
//masalaChai.addCourse()  //can't access 

//console.log(chai instanceof User);