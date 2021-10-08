const mongoose = require("mongoose");
const Student = require("../../models/student");
const {
	getSuccessfulReadObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.getAllStudents = async (req, res, next) => {
	try {
		const students = await Student.find({})
			.sort({ name: 1 })
			.populate("subjects");
		res.json(getSuccessfulReadObject(students));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};

exports.getStudentById = async (req, res, next) => {
	try {
		const id = req.params.id;
		if (!mongoose.isValidObjectId(id)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const student = await Student.findById(id).populate("subjects");
		if (!student) {
			const err = new Error(`No Record Found`);
			err.status = 404;
			return next(err);
		}
		res.json(getSuccessfulReadObject(student));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};

exports.getStudentNameFromSubject = async (req, res, next) => {
	try {
		const { subject } = req.body;
		if (!mongoose.isValidObjectId(subject)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const students = await Student.find({
			subjects: mongoose.Types.ObjectId(subject),
		})
			.sort({ name: 1 })
			.populate("subjects");
		if (faculties.length > 0) {
			return res.json(getSuccessfulReadObject(students));
		}
		const err = new Error(`No Record Found`);
		err.status = 404;
		next(err);
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
