const express = require(`express`),
  router = express.Router();
const db = require("../db");

const service = require(`../services/student.service`);
// http:localhost:3000/api/students/
router.get("/", async (req, res) => {
  const students = await service.getAllStudents();
  res.send(students);
});

// http:localhost:3000/api/students/:id
router.get("/:id", async (req, res) => {
  const students = await service.getStudentById(req.params.id);
  res.send(students);
});

router.delete("/:id", async (req, res) => {
  const students = await service.deleteStudentById(req.params.id);
  res.send("deleted successfully");
});

router.post("/", async (req, res) => {
  await service.addStudent(req.body);
  res.send("added successfully");
});

router.put("/:id", async (req, res) => {
  const studentId = req.params.id;
  await service.updateStudentById(studentId, req.body);
  res.send("Updated successfully");
});

module.exports = router;
