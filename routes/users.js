var express = require('express')
var router = express.Router()
var userModel = require('../models/userModel')

router.get('/', function(req, res, next) {

	userModel.find()
	.exec(function(err, result){
		if(err){
			return res.json({success:false, error: err})
		}else{
			return res.json({success: true, data: result})
		}
	})
});

router.post('/', function(req, res, next){
	var newUser = new userModel(req.body)

	newUser.save(function(err){
		if(err){
			return res.json({success: false, error: err})
		}else{
			return res.json({success: true, message: 'New user successfully added'})
		}
	})
})

module.exports = router;
