const accountId = 108
let accountEmail = "rowdyhero12@gmail.com"
var accountPassword = "12345"
accountCity = "Rampur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "helloboss@.com"
accountPassword = "271110"
accountCity = "mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])