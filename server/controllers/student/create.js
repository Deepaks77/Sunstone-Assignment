const Student = require("../../models/student");
const {
	getSuccessfulCreatedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");

exports.create = async (req, res, next) => {
	try {
		const { name, age, subjects } = req.body;
		if (!name) {
			const err = new Error(`Bad Request - Student Name Can't be Empty`);
			err.status = 400;
			return next(err);
		}
		await new Student({ name, age, subjects }).save();
		res.status(201).json(getSuccessfulCreatedRecordObject());
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
