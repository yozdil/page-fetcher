const fs = require("fs");
const request = require("request");
const url = process.argv.slice(2)[0];
const path = process.argv.slice(3)[0];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



// First we verify if the path provided already exists.
fs.access(path, fs.F_OK, (err) => {
  if (err) {
    // As the path doesn't exist we go ahead and write it.
    //  REQUEST LIBRARY
    request(url, (error, response, body) => {
      // writeFile creates a file in path provided by process.argv
      fs.writeFile(path, body, (err) => {
        if (err) return console.log(err);

        let fileSize = fs.statSync("index.html").size; //to get the file size
        console.log(`Downloaded and saved ${fileSize} bytes to ./index.html`);
      });
    });
    return;
  }
  // If the file we are trying to write already exists.
  // LEFT HERE!!!!!
  rl.question("How ya doin?\n", (input) => {
    readline.moveCursor(process.stdout, 0, -1);
    console.log("seems like you'r doing " + input.toString());
  });
});
