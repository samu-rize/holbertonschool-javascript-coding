#!/usr/bin/node
// a script that reads and prints the content of a file.
const fs = require('fs');
const fileName = process.argv[2];
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading file "${fileName}":`, err);
  } else {
    console.log(data);
  }
});
