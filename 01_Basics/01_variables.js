const accountId =144553
let accountEmail ="manishjungari@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Jaipur"


accountEmail = "mj@gmail.com"
accountPassword ="abcdef"
accountCity="Banguluru"

//accountId =12345698   const not allowed to changed id 

console.log(accountId);
console.log(accountEmail);

/*
prefer not to use var
bcoz of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);