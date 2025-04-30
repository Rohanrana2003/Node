const fs = require("fs");
const https = require("https");

console.log("First Print");

https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
  console.log("Fetched Data");
});

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data: ", data);
});

setTimeout(() => {
  console.log("Timeout");
}, 5000);
