import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
	},
	password: {
		type: String,
	},

	category: {
		type: String,
		default: "Unknown",
	},
});
