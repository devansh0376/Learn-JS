
//object collection of data member(properties) and functions 
// const user = 
// {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function()
//     {
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

//for creating multiple objects with similer properties and methods 
function Person(name, age) 
{
    this.name = name;
    this.age = age;

    this.greeting = function()
    {
        console.log(`Welcome ${this.name}`);

    }

    return this
}
  
// const user1 = Person("Bob", 30);
// //const user2 = Person("oggy", 20); //this will overwrite value so we need to use new keyword(constructer function) to creat different objects 
// console.log(user1.name); // Output: Bob

const user1 = new Person("Bob", 30);
const user2 = new Person("oggy", 20);
console.log(user2.age); 
user2.greeting()
//console.log(user2);
  