const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: "Subject Name is required",
		unique: true,
	},
});

module.exports = mongoose.model("Subject", subjectSchema);
