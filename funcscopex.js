//scope example, func that is immediately invoked

//new javascript
let firstName = 'Jane';

function printName(lastName) {
let  firstName = 'John';
console.log(firstName);
console.log(lastName);
};

printName('Doe')
console.log(firstName);
console.log(lastName);


//this is old JavaScript
/*var firstName = 'Jane';

(function(lastName) {
var  firstName = 'John';
console.log(firstName);
console.log(lastName);
}('Doe'));

console.log(firstName);*/
