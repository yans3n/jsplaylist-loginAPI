var express = require('express')
var router = express.Router()
var userModel = require('../models/userModel')
var jwt = require('jwt-simple');

router.post('/', function(req, res, next) {

	userModel.findOne()
	.and ([ { username: req.body.username }, { password: req.body.password } ])
	.exec(function(err, result){
		if(err || !result){
			return res.json({success:false, message: (err && err.message ? err.message : false) ||  'wrong password or username'})
		}else{

			//generate token	
			var secret = "Y0urS3cr3t"
			var token = jwt.encode({
				uid: result._id
			}, secret );

			return res.json({success: true, token: token})
		}
	})
});
module.exports = router;
