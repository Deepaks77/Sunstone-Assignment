const Faculty = require("../../models/faculty");
const {
	getSuccessfulDeletedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");

const mongoose = require("mongoose");
exports.remove = async (req, res, next) => {
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
		await Faculty.findOneAndDelete({
			_id: mongoose.Types.ObjectId(id),
		});
		res.json(getSuccessfulDeletedRecordObject());
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
