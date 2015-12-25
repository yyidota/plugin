	/**
	 * [fixedLayer description] 元素浮在底部
	 * @param  {[type]} options [description] 参数配置
	 * @example
	 * jQuery('#js-fixed').fixedLayer();
	 * @return {[type]}         [description]
	 * @author [author] mingyan
	 * @date: 2015-12-25 16:04:12
	 */
	jQuery.fn.fixedLayer = function(options){
		this.each(function(){
     		var o = {
     			insertId:'js-fixed-rule',//标尺的id	
     			scollMaxHeight:300,//滚条条的最大长度   
     			boDir:500,//默认标尺距离底部的距离     
	            fn: function () {	// 回调函数
	            }
	        };

	        if (options) {
	            jQuery.extend(o, options);
	        }
	        //获取需要浮动的元素
	        var $fixedEle = jQuery(this);

	        //获取父元素的跨度
	        var iParentW = $fixedEle.parent().width();

	        //获得自身的高度
	        var iSelfHeight = $fixedEle.height();

	        //获得自身的坐标
	        var iSelfPosL = $fixedEle.offset().left;

	        //参入参考标尺
	        $('<p style="height:0;" id="'+ o.insertId +'"></p>').insertBefore($fixedEle);

	        //获得插入元素的id
	        var $oRule = $('#' + o.insertId);

	        //获取插入元素距离顶部的距离
	        var iRuleTop = $oRule.offset().top;

	        //获得当前窗口的高度
	        var iCurrentWindowHeight = document.documentElement.clientHeight;

	        //如果参考坐标的顶部距离大于当前可视区域的高度则浮在底部
	        if(iRuleTop > iCurrentWindowHeight){
	        	$fixedEle.css({'position':'fixed',bottom: 0,left: iSelfPosL,'width': iParentW,background: '#fff',height: iSelfHeight});
	        }

	        //滚动事件监听
			$(window).scroll(function(){
				var sTop = $(document).scrollTop() + o.boDir;

				if(sTop>=0 && sTop<= iRuleTop - o.scollMaxHeight){                 
				    $fixedEle.css({'position':'fixed',bottom: 0,left: iSelfPosL,'width': iParentW,background: '#fff',height: iSelfHeight});
				}else{           
				    $fixedEle.removeAttr('style');
				}     
			});


		});
		return this;
	}
