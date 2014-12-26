module.exports = function(router){
	router.post('/media/upload', token);
	
	// 	- grant_type = client_credential
	// 	- appid = wx50b97d02c86f6c26
	// 	- secret = ef01a0f68e60488d59888199a12xxxx
	//
	//
	// 	https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
	//
	//
	
//
// 参数	是否必须	说明
// access_token	是	调用接口凭证
// type	是	媒体文件类型，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb）
// media	是	form-data中媒体文件标识，有filename、filelength、content-type等信息
//
	function token(req, res, next) {		
		req.assert('access_token', 'Invalid access_token required').notEmpty();
		req.assert('type', 'Invalid type required').notEmpty();
		// req.assert('media', 'Invalid media required').notEmpty();
		
	  var errors = req.validationErrors();
   	if (errors) {
			res.json({
				"errcode":40004,
				"errmsg":"invalid media type"
			});
			return;
		}
		
		return res.json({
			"type":"TYPE",
			"media_id":"MEDIA_ID",
			"created_at":123456789
		});
	};
}

