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
//

mui.plusReady(function() {
plus.navigator.setStatusBarBackground("#00ACE9");
});