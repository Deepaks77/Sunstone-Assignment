const { create } = require("./create");
const { getAllSubjects, getSubject } = require("./read");
const { updateSubject } = require("./update");
const { remove: removeSubject } = require("./delete");
module.exports = {
	create,
	getAllSubjects,
	getSubject,
	updateSubject,
	removeSubject,
};
