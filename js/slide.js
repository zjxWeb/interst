/* 界面滑动的js */
mui.init()
(function($) { 
			$(".mui-scroll-wrapper").scroll({ 
			bounce: true, //滚动条是否有弹力默认是true 
			indicators: 0.006, //是否显示滚动条,默认是true 
			}); 
			})(mui);