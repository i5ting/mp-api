mp-api
======

mp.betalk.cn/api

- http://mp.weixin.qq.com/debug
- http://mp.weixin.qq.com/wiki

## 基础支持

### 获取access_token接口/token

方法：GET 


see http://mp.weixin.qq.com/wiki/11/0e4b294685f817b95cbed85ba5e82b8f.html

- grant_type = client_credential
- appid = wx50b97d02c86f6c26
- secret = ef01a0f68e60488d59888199a12xxxx


https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET


### 上传多媒体文件

http请求方式: POST/FORM

http://file.api.weixin.qq.com/cgi-bin/media/upload?access_token=ACCESS_TOKEN&type=TYPE


- access_token	是必须	调用接口凭证
- type	是必须	媒体文件类型，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb）
- media	是必须	form-data中媒体文件标识，有filename、filelength、content-type等信息

?access_token=wx50b97d02c86f6c26&type=image

### 下载多媒体文件





## 参考

- http://segmentfault.com/blog/bornkiller/1190000000713461 （supertest）
- http://willi.am/blog/2014/07/28/test-your-api-with-supertest/ （supertest）

- https://github.com/ctavan/express-validator