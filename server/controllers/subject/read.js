const mongoose = require("mongoose");
const Subject = require("../../models/subject");
const {
	getSuccessfulReadObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.getAllSubjects = async (req, res, next) => {
	try {
		const subjects = await Subject.find({}).sort({ name: 1 });
		res.json(getSuccessfulReadObject(subjects));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};

exports.getSubject = async (req, res, next) => {
	try {
		const id = req.params.id;
		if (!mongoose.isValidObjectId(id)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const subject = await Subject.findById(id);
		if (!subject) {
			const err = new Error(`No Record Found`);
			err.status = 404;
			return next(err);
		}
		res.json(getSuccessfulReadObject(subject));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
