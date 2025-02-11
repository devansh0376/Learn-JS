class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    //createId() is marked as static, meaning it belongs to the User class, not its instances.
    static createId()
    { 
        return `123`;
    }
}
const hitesh = new User("hitesh");
 //console.log(hitesh.createId());//hitesh.createId() throws an error because createId() is a static method and cannot be called on an object.

 class Teacher extends User 
 {
    constructor(username, email)
    {
        //Super(username) calls the User constructor to initialize username.
        super(username);
        this.email = email;
    }
    //for call staic method in child we need to create method in child class
    static createId() {
        return super.createId(); // Calls the static method from User
    }
}

 const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId()); // ❌ Error: iphone.createId is not a function
console.log(User.createId()); // ✅ Output: "123"
console.log(Teacher.createId());



