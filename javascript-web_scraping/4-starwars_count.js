#!/usr/bin/node

const request = require("request");
const url = process.argv[2];
const id = '18';

request({method: "GET", url: url}, function(err, response, body) {
  if (err) {
    console.error(err);
  } else {
    const result = JSON.parse(body).results;
    const moviesFiltered = result.filter((film) =>
      film.characters.some((character) => character.includes(id))
    );
    console.log(moviesFiltered.length);
  }
});
