const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriberSchema = mongoose.Schema(
	{
		userTo: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		userFrom: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
); // 만든 date와 업뎃 date 표시되게

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

module.exports = { Subscriber };
