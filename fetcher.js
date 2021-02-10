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

// STRETCH CAN BE IMPLEMENTED
// Optional / Stretch: If the file already exists, let the user know and prompt
// them to type in Y(followed by the enter key) to overwrite the file, otherwise
// skip and exit the app. We suggest using the readline module, which we've
// previously used.