import 'dotenv/config';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD
});

// --- CRUD FUNCTIONS ---

async function getAllStudents() {
  const res = await pool.query('SELECT * FROM students ORDER BY student_id;');
  console.table(res.rows);
}

async function addStudent(first, last, email, date) {
  await pool.query(
    'INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES ($1, $2, $3, $4);',
    [first, last, email, date]
  );
  console.log('✅ Student added!');
  await getAllStudents();
}

async function updateStudentEmail(id, newEmail) {
  await pool.query(
    'UPDATE students SET email=$2 WHERE student_id=$1;',
    [id, newEmail]
  );
  console.log('✅ Email updated!');
  await getAllStudents();
}

async function deleteStudent(id) {
  await pool.query('DELETE FROM students WHERE student_id=$1;', [id]);
  console.log('✅ Student deleted!');
  await getAllStudents();
}

// --- Command-line interface ---

const [cmd, ...args] = process.argv.slice(2);
switch (cmd) {
  case 'getAll':
    await getAllStudents();
    break;
  case 'add':
    await addStudent(...args);
    break;
  case 'update':
    await updateStudentEmail(...args);
    break;
  case 'delete':
    await deleteStudent(...args);
    break;
  default:
    console.log(`Usage:
    node index.js getAll
    node index.js add "First" "Last" "email@example.com" "YYYY-MM-DD"
    node index.js update <student_id> "new.email@example.com"
    node index.js delete <student_id>"`);
}
await pool.end();
