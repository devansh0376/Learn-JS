//Function 1: SetUsername (Helper Function)
function SetUsername(username)
{
    // Imagine this does some complex database work
    this.username = username;
    console.log("called");
}
//Function 2: createUser (Main Function)
function createUser(username, email, password)
{
    SetUsername.call(this, username); // Calls SetUsername with 'this' from createUser
   
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

