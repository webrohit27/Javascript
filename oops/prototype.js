
// let myName = "rohit     "
// let mychannel = "daru     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rohit = function(){
    console.log(`rohit is present in all objects`);
}

Array.prototype.heyRohit = function(){
    console.log(`ROhit says hello`);
}

// heroPower.rohit()
// myHeros.rohit()
// myHeros.heyRohit()
// heroPower.heyRohit()

