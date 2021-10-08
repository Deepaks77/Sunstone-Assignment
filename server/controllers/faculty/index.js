const { create } = require("./create");
const {
	getFacultyNameFromSubject,
	getFacultyById,
	getAllFaculties,
} = require("./read");
const { updateFaculty } = require("./update");
const { remove: removeFaculty } = require("./delete");

module.exports = {
	create,
	getFacultyById,
	getFacultyNameFromSubject,
	getAllFaculties,
	updateFaculty,
	removeFaculty,
};
