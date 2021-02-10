const fs = require("fs");
const request = require("request");
const url = process.argv.slice(2)[0];
const path = process.argv.slice(3)[0];

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

request(url, (error, response, body) => {
  // if the given URL results in an error or non-200 result
  if (error || (response && response.statusCode !== 200)) {
    console.log("Error: following URL does not result in 200");
    console.log("statusCode:", response && response.statusCode);
    return;
  }

  // writeFile creates a file in path provided by process.argv
  fs.writeFile(path, body, (err) => {
    // If the path is not valid...
    if (err)
      return console.log(
        `Unfortunately the given path is not valid\nPlease enter a valid path like: ./index.html`
      );
    // Read the file size property and log it with a successful write.
    let fileSize = fs.statSync("index.html").size; //to get the file size
    console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
  });
});

// // First we verify if the path provided already exists.
// fs.access(path, fs.F_OK, (err) => {
//   if (err) {
//     // As the path doesn't exist we go ahead and write it.
//     //  REQUEST LIBRARY

//     return;
//   }
//   // If the file we are trying to write already exists.
//   // LEFT HERE!!!!!
//   rl.question("How ya doin?\n", (input) => {
//     readline.moveCursor(process.stdout, 0, -1);
//     console.log("seems like you'r doing " + input.toString());
//   });
// });
