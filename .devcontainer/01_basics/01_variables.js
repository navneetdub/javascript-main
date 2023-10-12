const accountId =144553
let accountemail ="navneet@google.com"
var accountpassword ="12345"
accountcity ="jaipur"

// accountId = 2 
// not allowed here
console.log(accountId);

accountemail ="hc@hc.com"
accountpassword ="2121234"
accountcity ="Jaipur"
let accountstate;
/* Prefer not to use var  because of issue in block scope and functional scope
*/

console.table(accountId, accountemail, accountpassword, accountcity, accountstate);
