const Subject = require("../../models/subject");
const {
	getSuccessfulCreatedRecordObject,
	getServerErrorResponseObject,
} = require("../../utils/responseObject");
exports.create = async (req, res, next) => {
	try {
		const { name } = req.body;
		if (!name) {
			const err = new Error(`Bad Request - Student Name Can't be Empty`);
			err.status = 400;
			return next(err);
		}
		const subject = await Subject.findOne({ name });
		if (subject) {
			const err = new Error(`${subject.name} already exists`);
			err.status = 400;
			return next(err);
		}
		await new Subject({ name }).save();
		res.status(201).json(getSuccessfulCreatedRecordObject());
	} catch (error) {
		res.status(500).json(getServerErrorResponseObject(error));
	}
};
