const mongoose = require("mongoose");
const Faculty = require("../../models/faculty");
const {
	getSuccessfulReadObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");

exports.getAllFaculties = async (req, res, next) => {
	try {
		const faculties = await Faculty.find({})
			.sort({ name: 1 })
			.populate("subjects");
		res.json(getSuccessfulReadObject(faculties));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};

exports.getFacultyById = async (req, res, next) => {
	try {
		const id = req.params.id;
		if (!mongoose.isValidObjectId(id)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const faculty = await Faculty.findById(id).populate("subjects");
		if (!faculty) {
			const err = new Error(`No Record Found`);
			err.status = 404;
			return next(err);
		}
		res.json(getSuccessfulReadObject(faculty));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};

exports.getFacultyNameFromSubject = async (req, res, next) => {
	try {
		const { subject } = req.body;
		if (!mongoose.isValidObjectId(subject)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const faculties = await Faculty.find({
			subjects: mongoose.Types.ObjectId(subject),
		})
			.sort({ name: 1 })
			.populate("subjects");

		if (faculties.length > 0) {
			return res.json(getSuccessfulReadObject(faculties));
		}

		const err = new Error(`No Record Found`);
		err.status = 404;
		return next(err);
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
