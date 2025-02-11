function CreateUser(username,score)
{
    this.username=username;
    this.score=score
    this.inc=function() {
        this.score++
    }
    return this
    
}

//prototype allows multiple objects to share a method.

CreateUser.prototype.increment = function(){
    this.score++
}
CreateUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const u1=new CreateUser("dev",21)
const u2=new CreateUser("ved",12)

// console.log(u1.username)
// console.log(u2.username)

u1.increment() // increment score by one (21 +1)
u1.printMe() // 22
u1.inc()
u1.printMe() // 23
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/