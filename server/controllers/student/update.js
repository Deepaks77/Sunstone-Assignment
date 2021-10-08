const Student = require("../../models/student");
const mongoose = require("mongoose");
const {
	getSuccessfulUpdatedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.updateStudent = async (req, res, next) => {
	try {
		const id = req.params.id;
		if (!mongoose.isValidObjectId(id)) {
			const err = new Error(
				`Invalid Params - Params Id is not valid Mongo Object Id`
			);
			err.status = 400;
			return next(err);
		}
		const student = await Student.findById(id);
		if (!student) {
			const err = new Error(`Student does not exist`);
			err.status = 400;
			return next(err);
		}
		const updated = await Student.findOneAndUpdate(
			{ _id: mongoose.Types.ObjectId(id) },
			{ ...req.body },
			{ new: true, runValidators: true }
		);
		res.json(getSuccessfulUpdatedRecordObject(updated));
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
