const db = require("../db");

module.exports.getAllStudents = async () => {
  const [rows] = await db
    .query("SELECT * FROM student")
    .catch((err) => console.log("db connection failed  " + err));
  return rows;
};
module.exports.getStudentById = async (id) => {
  const [rows] = await db
    .query("SELECT * FROM student where id=?", [id])
    .catch((err) => console.log("db connection failed  " + err));
  return rows;
};
module.exports.deleteStudentById = async (id) => {
  const [rows] = await db
    .query("DELETE FROM student where id=?", [id])
    .catch((err) => console.log("db connection failed  " + err));
  return rows;
};

module.exports.addStudent = async (obj) => {
  const rows = await db
    .query(
      "INSERT INTO student (name, department, id, sem) VALUES (?, ?, ?, ?)",
      [obj.name, obj.department, obj.id, obj.sem]
    )
    .catch((err) => console.log("db connection failed  " + err));
  return rows;
};

module.exports.updateStudentById = async (id, obj) => {
  const rows = await db
    .query(
      "UPDATE student SET name = ?, department = ?, sem = ? WHERE id = ?",
      [obj.name, obj.department, obj.sem, id]
    )
    .catch((err) => console.log("db connection failed  " + err));
  return rows;
};
