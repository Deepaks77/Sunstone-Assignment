const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const facultySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		age: {
			type: Number,
			min: 5,
			max: 100,
		},
		subjects: [{ type: ObjectId, ref: "Subject" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Faculty", facultySchema);
