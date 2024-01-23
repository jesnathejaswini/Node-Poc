const mysql = require(`mysql2/promise`);

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "student_db",
  password: "root",
});

// pool
//   .query("SELECT * FROM student")
//   .then((data) => console.log(data))
//   .catch((err) => console.log("db connection failed  " + err));

module.exports = pool;
