exports.getSuccessfulCreatedRecordObject = (data = {}) => {
	return {
		success: true,
		data: data,
		message: `Record has been created successfully`,
	};
};

exports.getSuccessfulUpdatedRecordObject = (data) => {
	return {
		success: true,
		data: data,
		message: `Record has been updated successfully`,
	};
};

exports.getSuccessfulReadObject = (data) => {
	return {
		success: true,
		data: data,
	};
};

exports.getUnSuccessfulReadObject = () => {
	return {
		success: false,
		data: {},
		message: "No Record were found",
	};
};
exports.getSuccessfulDeletedRecordObject = (data = {}) => {
	return {
		success: true,
		data: data,
		message: `Record has been deleted successfully`,
	};
};

exports.getServerErrorResponseObject = (error) => {
	return {
		success: false,
		data: {},
		message: "Unable to Process Your Request",
		logs: {
			errorMessage: error.message,
			errorStack: error.stack,
		},
	};
};
