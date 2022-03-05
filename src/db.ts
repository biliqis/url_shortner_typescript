import config from './config'
const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
	try {
		const connectionParams = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		//await mongoose.connect(config.MONGO_URI, connectionParams);
		//console.log(config.MONGO_URI)
		 await mongoose.connect(config.DB_URI)
		console.log("Connected to DB");
	} catch (error) {
		console.error("an error occurred while connecting to the database");
	}
};