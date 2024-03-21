/* eslint-disable comma-dangle */
const fs = require('fs');

const countStudents = (path) => {
  try {
    const content = fs.readFileSync(path, 'utf8');
    const lines = content.split(/\r?\n/);
    const headers = lines[0].split(',');
    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      const data = lines[i].split(',');
      if (data.length === headers.length) {
        const [firstname, , , field] = data;

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    }
    console.log(`Number of students: ${lines.length - 1}`);
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        console.log(
          `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
