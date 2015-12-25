/**
 * [shake description] 元素晃动
 * @param  {[type]} options [description] 参数配置
 * @example
 * jQuery('#JbtnSearch').shake({attr:'marginLeft'});
 * @return {[type]}         [description]
 * @author [author] mingyan
 * @date: 2015-12-25 17:52:46
 */
jQuery.fn.shake = function(options){
	this.each(function(){
		var o = {
			attr:'marginLeft',//晃动方向
			speed:20,//晃动的频率
			time:30,//晃动时间
			fn:function(){}
		};

		if (options) {
	        jQuery.extend(o, options);
	    }

	    var $shakeEle = jQuery(this);

	    if( $shakeEle.attr('onOff') ) return;
	    //设置开关
	   	$shakeEle.attr('onOff', true);

	    //获得初始位置
	    var pos = parseInt($shakeEle.css(o.attr));

		//生成一个频率数组
		var arr = [];
		var num = 0;
		var timer = null;
		for ( var i = o.speed; i>0; i-=2 ) {
			arr.push( i, -i );
		}
		arr.push(0);

		clearInterval( timer );
		timer = setInterval(function (){
			var dis = pos + arr[num] + 'px';
			$shakeEle.css(o.attr, dis)
			num++;
			if ( num === arr.length ) {
				clearInterval( timer );
				o.fn && o.fn();
				$shakeEle.attr('onOff', false);
			}
		}, o.time);

	});
	return this;
}

