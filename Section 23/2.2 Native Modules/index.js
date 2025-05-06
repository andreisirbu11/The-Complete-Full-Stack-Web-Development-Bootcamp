const fs = require("fs");

fs.writeFile("message.txt", "Hello from Node.js!", function (err) {
    if(err) throw err;
    console.log("File has been saved!");
});

fs.readFile("./message.txt", {encoding: "utf-8"} ,(err, data) => {
    if(err) throw err;
    console.log(data);
});
