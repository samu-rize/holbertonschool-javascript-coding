#!/usr/bin/node

const request = require("request");
const url = process.argv[2];
const fileName = process.argv[3];
const fs = require("fs");

request({method: 'GET', url: url}, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(fileName, body, "utf-8", (err) => {
      if (err)
        console.error(err);
    });
  }
});