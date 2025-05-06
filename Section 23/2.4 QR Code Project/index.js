/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import { createWriteStream, writeFile } from 'fs';
import  qr  from 'qr-image';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'url',
        message: 'Enter your desired URL:',
    }
  ])
  .then((answers) => {
    // create URL for the user given input
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(createWriteStream("qr_img.png"));

    // create a text file URL.txt and save the url
    writeFile("./URL.txt", url, (err) => {
        if(err) throw err;
        console.log("File has been saved!");
    })
  })
  .catch((error) => {
    // handle errors 
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong.");
    }
  });



