//imports
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const morgan = require("morgan");
const cors = require("cors");
const app = express();
const { readdirSync } = require("fs");

app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();

// print api logs just in development mode
if (process.env.NODE_ENV !== "production") {
	app.use(morgan("dev"));
}
const PORT = process.env.PORT || 5000;

app.use(cors());

//import all routes file synchronously
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.get("/", (req, res) => {
	res.send("Api is running...");
});

app.use(notFound); //404 not found if any mismatch route is requested
app.use(errorHandler); //error if any above routes have error it has error in firts parameter

app.listen(PORT, () => {
	console.log(
		`App is running in ${process.env.NODE_ENV} mode and listening on ${PORT}`
	);
});
