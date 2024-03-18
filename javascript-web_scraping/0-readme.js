#!/usr/bin/node
// a script that reads and prints the content of a file.
import { readFile } from 'fs'
const fileName = process.argv[2]
readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading file "${fileName}":`, err)
  } else {
    console.log(data)
  }
})
