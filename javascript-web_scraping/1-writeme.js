#!/usr/bin/node
// a script that writes a string to a file.
const fs = require('fs');
const fileName = process.argv[2];
const text = process.argv[3];
fs.writeFile(fileName, text, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  }
});
