import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const fields = {};
    students.forEach((student) => {
      const parts = student.split(',');
      const firstName = parts[0].trim();
      const field = parts[3].trim();
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });

    resolve(fields);
  });
});

export default readDatabase;
