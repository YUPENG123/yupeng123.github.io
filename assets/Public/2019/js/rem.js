/*(function(doc,win){  
	if( $(window).width() <= 768 ){
		var docEl =doc.documentElement,  
				resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
				recalc = function(){  
					var clientWidth = docEl.clientWidth>1024 ? 750 :docEl.clientWidth;  
					if (!clientWidth) {return};  
					docEl.style.fontSize = 100 * (clientWidth/750) + 'px';  
				};  
		recalc();  
		if (!doc.addEventListener) return;  
		win.addEventListener(resizeEvt, recalc, false);  
		doc.addEventListener('DOMContentLoaded', recalc, false);
	}
})(document,window)
*/
