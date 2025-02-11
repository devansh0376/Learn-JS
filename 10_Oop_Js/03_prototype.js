// We make prototype of datatype like object , Array and then all array , object can use that prototype 

//prototype with object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};
//Now, let’s add a new method to all objects using Object.prototype:
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
};

heroPower.hitesh();  // ✅ Output: hitesh is present in all objects
//Now every object in JavaScript can use hitesh() because we added it to Object.prototype.

//prototype with Array

//Arrays also have a prototype (Array.prototype), which gives them methods like .map(), .filter(), etc.

//We can add a custom method to all arrays:

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
};

let myHeros = ["thor", "spiderman"];
myHeros.heyHitesh(); // ✅ Output: Hitesh says hello
//object prototype hitesh can't access heyhitesh() coz it is array prototype not object