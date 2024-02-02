// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

 const greetings = "Jai Shree Ram";

 for (const greet of greetings) {
    //console.log(`each char is ${greet}`)    
 }


 // Maps 
 //map is an object in javascript.
 // The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

 const map = new Map();
 map.set('MH', 'Maharashtra');
 map.set('UP', 'Uttar Pradesh');
  
 for (const [key, value] of map) {
    console.log(key, value);
 }