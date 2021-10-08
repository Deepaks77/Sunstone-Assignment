const express = require("express");
const router = express.Router();

//controllers
const {
	create,
	getAllSubjects,
	getSubject,
	updateSubject,
	removeSubject,
} = require("../controllers/subject");

router.post("/subject", create);
router.get("/subjects", getAllSubjects);
router
	.route("/subject/:id")
	.get(getSubject)
	.put(updateSubject)
	.delete(removeSubject);
module.exports = router;
