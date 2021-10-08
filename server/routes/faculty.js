const express = require("express");
const router = express.Router();

//controllers
const {
	create,
	getFacultyById,
	getFacultyNameFromSubject,
	getAllFaculties,
	updateFaculty,
	removeFaculty,
} = require("../controllers/faculty");

router.post("/faculty", create);
router.get("/faculties", getAllFaculties);
router.post("/faculty-from-subject", getFacultyNameFromSubject);
router
	.route("/faculty/:id")
	.get(getFacultyById)
	.put(updateFaculty)
	.delete(removeFaculty);
module.exports = router;
