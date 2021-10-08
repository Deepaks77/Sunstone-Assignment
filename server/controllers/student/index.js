const { create } = require("./create");
const {
	getAllStudents,
	getStudentNameFromSubject,
	getStudentById,
} = require("./read");

const { updateStudent } = require("./update");
const { remove: removeStudent } = require("./delete");
module.exports = {
	create,
	getAllStudents,
	getStudentNameFromSubject,
	getStudentById,
	updateStudent,
	removeStudent,
};
