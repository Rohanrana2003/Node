const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 key Executed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 key Executed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 key Executed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 key Executed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 key Executed");
});
