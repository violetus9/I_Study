const { request } = require("express");
const express = require("express");
const router = express.Router();

const { Subscriber } = require("../models/Subscriber");

//=================================
//             Subscribe
//=================================

router.post("/subscribeNumber", (req, res) => {
	Subscriber.find({ userTo: req.body.userTo }).exec((err, subscribe) => {
		if (err) return res.status(400).send(err);
		return res
			.status(200)
			.json({ success: true, subscribeNumber: subscribe.length });
	});
});

router.post("/subscribed", (req, res) => {
	// 받아오는 정보가 몇개냐 >> length가 변하고, 그건 내가 구독을 했냐 안했냐
	Subscriber.find({
		userTo: req.body.userTo,
		userFrom: req.body.userFrom,
	}).exec((err, subscribe) => {
		if (err) return res.status(400).send(err);
		let result = false;
		if (subscribe.length !== 0) {
			result = true;
		}
		return res.status(200).json({ success: true, subscribed: result });
	});
});

router.post("/unSubscribed", (req, res) => {
	Subscriber.findOneAndDelete({
		userTo: req.body.userTo,
		userFrom: req.body.userFrom,
	}).exec((err, doc) => {
		if (err) return res.status(400).json({ success: false, err });
		res.status(200).json({ success: true, doc });
	});
});

router.post("/subscribed", (req, res) => {
	// db에 userto userfrom 저장해야대니까
	const subscribe = new Subscriber(req.body);

	subscribe.save((err, doc) => {
		if (err) return res.json({ success: false, err });
		res.status(200).json({ success: true });
	});
});

module.exports = router;
