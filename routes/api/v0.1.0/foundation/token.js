module.exports = function(router){
	router.get('/token', token);
	
	// 	- grant_type = client_credential
	// 	- appid = wx50b97d02c86f6c26
	// 	- secret = ef01a0f68e60488d59888199a12xxxx
	//
	//
	// 	https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
	//
	//
	function token(req, res, next) {
		console.log('token' + req.query['grant_type']);
		
		req.assert('grant_type', 'Invalid grant_type required').notEmpty();
		req.assert('appid', 'Invalid appid required').notEmpty();
		req.assert('secret', 'Invalid secret required').notEmpty();
		
	  var errors = req.validationErrors();
   	if (errors) {
			res.json({
				"errcode":40013,
				"errmsg":"invalid appid"
			});
			return;
		}
		
		if(req.query['grant_type'] != 'client_credential'){
			res.json({
				"errcode":40014,
				"errmsg":"invalid grant_type"
			});
			return;
		} 
		
		return res.json({
			"access_token":"ACCESS_TOKEN",
			"expires_in":7200
		});
	};
}

