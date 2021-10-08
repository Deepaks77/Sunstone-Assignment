const express = require("express");
const router = express.Router();

//controllers
const {
	create,
	getAllStudents,
	getStudentNameFromSubject,
	getStudentById,
	updateStudent,
	removeStudent,
} = require("../controllers/student");

router.post("/student", create);
router.get("/students", getAllStudents);
router.post("/student-from-subject", getStudentNameFromSubject);
router
	.route("/student/:id")
	.get(getStudentById)
	.put(updateStudent)
	.delete(removeStudent);

module.exports = router;
