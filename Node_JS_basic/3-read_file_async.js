const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const rows = data.split('\n').filter((row) => row);
    const headers = rows.shift().split(',');
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');
    const fields = {};

    rows.forEach((row) => {
      const fieldsData = row.split(',');
      const field = fieldsData[fieldIndex];
      const firstName = fieldsData[firstNameIndex];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    // Print statistics
    console.log(`Number of students: ${rows.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const students = fields[field];
        console.log(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
