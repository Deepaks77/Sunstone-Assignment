const Subject = require("../../models/subject");
const mongoose = require("mongoose");
const {
	getSuccessfulUpdatedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.updateSubject = async (req, res, next) => {
	try {
		const { name } = req.body;
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
			const err = new Error(`Subject does not exist`);
			err.status = 400;
			return next(err);
		}
		const updated = await Subject.findOneAndUpdate(
			{ _id: mongoose.Types.ObjectId(id) },
			{ name },
			{ runValidators: true, new: true }
		);
		res.json(getSuccessfulUpdatedRecordObject(updated));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
