COMP 3005 – Assignment 3
PostgreSQL CRUD Application
Student: Tavish Rathore
Student ID: 101325409

------------------------------------------------------------
OVERVIEW
------------------------------------------------------------

This project implements a PostgreSQL-based CRUD (Create, Read, Update, Delete)
application using Node.js. The application connects to a PostgreSQL database
and performs operations on a students table according to assignment requirements.

The project includes:
- SQL script to create and seed the database
- Node.js application with CRUD functions
- Instructions to run and test the application
- Required demonstration video link

------------------------------------------------------------
DATABASE SCHEMA (AS PROVIDED IN ASSIGNMENT)
------------------------------------------------------------

CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name  TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    enrollment_date DATE
);

Initial Seed Data:

INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
('John',  'Doe',  'john.doe@example.com', '2023-09-01'),
('Jane',  'Smith','jane.smith@example.com','2023-09-01'),
('Jim',   'Beam', 'jim.beam@example.com', '2023-09-02');

This SQL is stored in:
db/01_init.sql

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------

assignment3/
│
├── app/
│   ├── index.js               (CRUD functions implemented in Node.js)
│   ├── .env                   (private DB credentials – ignored by Git)
│   ├── .env.example           (template for TA)
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
└── db/
    └── 01_init.sql            (schema + seed inserts)

------------------------------------------------------------
INSTALLATION AND RUNNING THE APPLICATION
------------------------------------------------------------

STEP 1: Install Node dependencies
---------------------------------
cd app
npm install

STEP 2: Run CRUD operations from the terminal
---------------------------------------------

Get all students:
node index.js getAll

Add a new student:
node index.js add "Alice" "Wong" "alice.wong@example.com" "2024-09-01"

Update student email:
node index.js update 4 "alice.updated@example.com"

Delete a student:
node index.js delete 4

STEP 3: Verify changes in pgAdmin
---------------------------------
Run the query:
SELECT * FROM students ORDER BY student_id;

------------------------------------------------------------
FUNCTION DESCRIPTIONS
------------------------------------------------------------

getAllStudents():
    - Retrieves and prints all student records.

addStudent(first_name, last_name, email, enrollment_date):
    - Inserts a new student record.
    - Validates UNIQUE email.

updateStudentEmail(student_id, new_email):
    - Updates the email of a specific student.

deleteStudent(student_id):
    - Deletes a student by ID.

All functions are implemented in:
app/index.js

------------------------------------------------------------
DEMONSTRATION VIDEO (REQUIRED)
------------------------------------------------------------

Video Link:


The video demonstrates:
- Database and table in pgAdmin
- Running all CRUD operations in terminal
- Verifying results in pgAdmin
- Showing project structure and .env.example

Maximum allowed video time: 5 minutes.

------------------------------------------------------------
RUBRIC CHECKLIST (20 MARKS)
------------------------------------------------------------

Database Setup (5 marks):
    - Correct table creation
    - Seed data inserted
    - Constraints (PK, NOT NULL, UNIQUE) correct

CRUD Functions (10 marks):
    - getAllStudents() correct
    - addStudent() correct
    - updateStudentEmail() correct
    - deleteStudent() correct

Code Quality (5 marks):
    - Clean repo structure
    - Clear comments in index.js
    - Proper README
    - .env.example included

------------------------------------------------------------
TROUBLESHOOTING
------------------------------------------------------------

Error 42P01: relation "students" does not exist:
    - Ensure PGDATABASE in .env matches your actual database.
    - Ensure db/01_init.sql was run.

Error 28P01: authentication failed:
    - Wrong username or password. Check PostgreSQL login.

Connection refused:
    - Ensure PostgreSQL service is running.
    - Ensure correct port number (5432 by default).

------------------------------------------------------------
SUBMISSION INSTRUCTIONS
------------------------------------------------------------

1. Push final project to a PUBLIC GitHub repository.
2. Ensure README includes your video link.
3. Submit your GitHub repo link on Brightspace.
4. Late submissions receive -10%.

------------------------------------------------------------
NOTES
------------------------------------------------------------

.env is intentionally excluded (security best practice).
.env.example MUST be included for the TA.
This project satisfies all assignment specifications.

------------------------------------------------------------
END OF README.txt
------------------------------------------------------------
