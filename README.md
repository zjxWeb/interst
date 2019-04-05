<<<<<<< HEAD
**以下接口为本地测试完善好才上传至服务器，请自己将127.0.0.1 换成 zhangjianxiong.club 如有什么问题 请联系QQ：1184159966**

1. 个人信息的接口为 
	``
=======
------------------------------------
zhangzhang

1. 个人信息的接口为 id，name,email,avatar
	```
>>>>>>> 97f28f90b5af223057e8fbcae7556a68b4684c5f
		http://zhangjianxiong.club:5000/api/users/current
		请求类型：GET
		向服务端传递参数：无
		传回参数：id，name,email,avatar
		测试账号：
		email:zhangjianxiong@zhangjianxiong.com
		password:111111
<<<<<<< HEAD
	``
	** 必须先获取到登陆后的token **
	-  遇到的问题
			--  在相同的css当中，要在不同的页面使用，注意页面的布局，否则，就不要采用。
2. 个人信息测试API
	``
		http://127.0.0.1:5000/api/profile
		请求方式：GET
		用于测试此路由是否正常工作，可以在 浏览器直接复制 
	``
3. 个人信息的添加和编辑入口-
	``
		http://127.0.0.1:5000/api/profile
		请求类型为：POST
		向服务端传递参数：必须传的参数（status，handle，skills），可选参数（company，website，location，bio，githubusername，wechat，QQ，tengxunkt，wangyikt）
	``
		传回参数的实例
	``
		{
			"skills": [
				"sds"
			],
			"_id": "5ca5f086c748a02e0c92f9a9",
			"user": "5c8f6e3b9d64e84714181d18",
			"handle": "sssdsd",
			"status": "zhang",
			"experience": [],
			"education": [],
			"date": "2019-04-04T11:54:46.902Z",
			"__v": 0
		}
	``
	** 必须先获取到登陆后的token **
4. 获取个人接口-
	``
		http://127.0.0.1:5000/api/profile
		请求类型为：GET、
		向服务器传入的参数为：无，
	``
		传回参数的实例
	``
		[
			{
				"skills": [
					"sds"
				],
				"_id": "5ca5f086c748a02e0c92f9a9",
				"user": {
					"_id": "5c8f6e3b9d64e84714181d18",
					"name": "zhang",
					"avatar": "//www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=200&r=pg&d=mm"
				},
				"handle": "sssdsd",
				"status": "zhang",
				"experience": [],
				"education": [],
				"date": "2019-04-04T11:54:46.902Z",
				"__v": 0
			}
		]
	``
	** 注意：此处返回的是一个数组，而不是一个对象**
	** 必须先获取到登陆后的token **
=======
	```
	-  遇到的问题
			--  在相同的css当中，要在不同的页面使用，注意页面的布局，否则，就不要采用。
			-- 
 



--------------------------
dengdeng
	-  4-4 
		- 新写 luntan.html  页面 
		- 修改json文件 默认启动页为tabber.html
		- 
	
	- 遇到的问题
		- 
		
	
>>>>>>> 97f28f90b5af223057e8fbcae7556a68b4684c5f
