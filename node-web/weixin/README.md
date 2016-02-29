#weixin
微信开发的概念解释：
##access_token
微信的大部分开发都需要用到access_token, access_token是类似id一样的东西，用来唯一标识一个公众号。
获取accss_token后，需要在服务器端保存，token的有效期为2个小时，服务器端需要有定时刷新access_token的行为。

##后台服务器
微信自己的后台服务器会推送消息到我们自己开发的服务器上面，格式以xml或者json的形式。
需要借助Ngrok之类的内网穿透工具暴露我们的url到公网上，方便微信接口的调试。

##wx js sdk
微信js sdk可以用来调用微信本身的一些硬件功能，比如扫一扫，拍照片等。
使用sdk之前需要用上面提到的access_token生成js_ticket。