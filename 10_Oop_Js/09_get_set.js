class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //here but age can't be less that 0 so we use get set method for this 
    // Getter
    get age() {
        return this._age;
    }

    // Setter
    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative!");
        } else {
            this._age = value;
        }
    }
}

// const user1 = new User("Alice", 25);
// console.log(user1.age);  // ✅ Output: 25

// user1.age = 30;  // ✅ Can modify age directly 
// console.log(user1.age);  // ✅ Output: 30

const user1 = new User("Alice", 25);

console.log(user1.age);  // ✅ Output: 25 (calls the getter)

user1.age = -5;  // ❌ Output: "Age cannot be negative!" (calls the setter)
console.log(user1.age);  // ✅ Output: 25 (unchanged)