const Subject = require("../../models/subject");
const mongoose = require("mongoose");
const {
	getSuccessfulDeletedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.remove = async (req, res) => {
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
			const err = new Error(`Subject does not exist`);
			err.status = 400;
			return next(err);
		}
		await Subject.findOneAndDelete({
			_id: mongoose.Types.ObjectId(id),
		});
		res.json(getSuccessfulDeletedRecordObject());
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
