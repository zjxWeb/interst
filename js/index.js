//打开新的页面
function openPage (obj,url,id ){
			mui.plusReady(function(){
			obj.addEventListener('tap',function(){
				mui.openWindow({
					url:url,
					id:id   
				})
			})
		})
		}