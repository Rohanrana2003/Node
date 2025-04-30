const crypto = require("crypto");

var a = 10;
var b = 30;

console.log("Hello world");

function add(a, b) {
  console.log(a + b);
}

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First key Executed");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second key Executed");
});

add(a, b);
