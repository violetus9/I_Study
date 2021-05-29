const { request } = require('express');
const express = require('express');
const router = express.Router();


const { Comment } = require("../models/Comment");


//=================================
//             Comment
//=================================


router.post("/saveComment", (req, res) => {

  const comment = new Comment(req.body)

  comment.save((err, comment) => {
    if (err) return res.json({ success: false, err })
    // comment를 바로 쓰면 writer의 모든 정보를 가져올 수 없어
    // save하면 populate도 안돼!
    // 다음과 같이 해결하자
    Comment.find({ '_id': comment._id })
      .populate('wirter')
      .exec((err, result) => {
        if (err) return res.json({ success: false, err })
        res.status(200).json({ success: true, result })
      })

  })

});

router.post("/getComments", (req, res) => {

  Comment.find({ 'postId': req.body.videoId })
    .populate('writer')
    .exec((err, comments) => {
      if (err) return res.status(400).send(err)
      res.status(200).json({ success: true, comments })
    })

});




module.exports = router;
