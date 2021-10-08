const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Mongodb Connected :", conn.connection.host);
	} catch (e) {
		console.log("Unable to connect db error", e.message);
		process.exit(1);
	}
};

module.exports = connectDB;
