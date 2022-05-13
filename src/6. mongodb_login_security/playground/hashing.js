const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

//4. Crypting password
// bcrypt.genSalt(10, (err, salt) => {//10 is limit of total request
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

//5. check is hashpassword provided is same as password string
var hashedPassword = '$2a$10$huAU4qTnQuGPifHEXfV9cOmPJ7p61oKaoXrY1WviiDAznE/rW8oLK';


bcrypt.compare('123!', hashedPassword, (err, res) => {
  console.log(res);
});


//3. Using jwt
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');//123abc is secret key to sign token with
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');//123abc to decode using the secret key
// console.log('decoded', decoded);

//1. Signing/Hashing example
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();//convert string to hash
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// 2. Salting
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()//somesecret is a salt/secret key
// }
//
// //test check changing of data
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
//3. Verify
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();//storing new hash match to check if data was change
// if (resultHash === token.hash) {//if hash returned same value as hash stored in data
//   console.log('Data was not changed');
// } else {//since data.id change to 5, the hash value changed and it will be detected and able to block hacker from changing data.
//   console.log('Data was changed. Do not trust!');
// }
