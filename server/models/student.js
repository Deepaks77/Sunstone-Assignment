const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		age: {
			type: Number,
			min: 5,
			max: 80,
		},
		subjects: [{ type: ObjectId, ref: "Subject" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
