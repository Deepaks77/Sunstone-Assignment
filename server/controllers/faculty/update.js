const Faculty = require("../../models/faculty");
const mongoose = require("mongoose");
const {
	getSuccessfulUpdatedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.updateFaculty = async (req, res, next) => {
	try {
		const id = req.params.id;
		if (!mongoose.isValidObjectId(id)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const faculty = await Faculty.findById(id);
		if (!faculty) {
			const err = new Error(`Faculty does not exist`);
			err.status = 400;
			return next(err);
		}
		const updated = await Faculty.findOneAndUpdate(
			{ _id: mongoose.Types.ObjectId(id) },
			{ ...req.body },
			{ runValidators: true, new: true }
		);
		res.json(getSuccessfulUpdatedRecordObject(updated));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
