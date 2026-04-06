import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((fields) => {
        let output = 'This is the list of our students';
        const sortedFields = Object.keys(fields).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );
        sortedFields.forEach((field) => {
          output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        });
        res.status(200).type('text/plain').send(output);
      })
      .catch(() => {
        res.status(500).type('text/plain').send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text/plain').send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).type('text/plain').send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).type('text/plain').send('Cannot load the database');
      });
  }
}
