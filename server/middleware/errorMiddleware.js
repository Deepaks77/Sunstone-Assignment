const notFound = (req, res, next) => {
	const error = new Error("Not Found - " + req.originalUrl);
	error.status = 404; //error is a object
	next(error);
};

const errorHandler = (err, req, res, next) => {
	res.status(err.status || res.statusCode || 500);
	res.json({
		success: false,
		data: {},
		message: "Error Status Code: " + res.statusCode + " " + err.message,
		//	errorStack: process.env.NODE_ENV !== "production" ? err.stack : null,
	});
};

module.exports = {
	notFound,
	errorHandler,
};
