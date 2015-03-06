(function ( $ ) {

	function msieversion() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
			// If Internet Explorer, return version number
			// alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
			return true;
		} else {                 
			// If another browser, return 0
			// alert('otherbrowser');
		}
		return false;
	}
 
	$.fn.scrollpage = function( options ) {
 
		var settings = $.extend({
			snap: options.span || false,
			stepper: options.stepper || true,
			windowMinHeight: options.windowMinHeight || true,
			stepalign: options.stepalign || "right"
		}, options );
		$.fn.scrollpage.currentp = 0


		var winH = $(window).height(),
			doctop = (window.scrollY)? window.scrollY : (document.documentElement && document.documentElement.scrollTop)? document.documentElement.scrollTop : document.body.scrollTop,
			panelbox = this,
			fixpanel = this.find(".pfix"),
			tbfixed = null,
			panels = this.find(".panel.stacked"),
			autoscroll = false,
			buffer = (winH<=900)? winH*0.1 : winH*0.2,
			prevtop = nfocus = -Infinity,
			panelboxbottom = panelboxtop = 1,
			baseval = 0,
			stepper;

		// var focusevent = new Event('focused');
		// var blurevent = new Event('blurred');


		var focusevent = document.createEvent('Event');
		focusevent.initEvent('focused', true, true);

		var blurevent = document.createEvent('Event');
		blurevent.initEvent('blurred', true, true);

		// document.addEventListener('focused', function (e) {
		//   // e.target matches document from above
		// }, false);
		// // target can be any Element or other EventTarget.
		// document.dispatchEvent(focusevent);


		function appendStepper(){
			stepper = $('<ul class="panelstepper pfix"></ul>').prependTo(panelbox);
			panels.each(function(i,d){
				$(d).attr('data-panel',i)
				var step = $('<li class="step" data-step='+i+'></li>').appendTo(stepper)
				step.on("click", function(){
					autoscroll = true;
					var panel = $($(".panel.stacked")[i])
					var steptop = panel.offset().top
					var downward = (i>nfocus)? true : false;
					panelBlur($(".panel.stacked.focused"), nfocus)
					nfocus = i
					$("html, body").stop().animate({ scrollTop: steptop }, 700, 'swing', function(){
						autoscroll=false;
						panelFocus(panel,nfocus,downward)
					});
				})
			})
			tbfixed = $(".pfix")
		}
		if(settings.stepper) appendStepper()
		else tbfixed = $(".pfix")


		$("#scroll-to-ranking").on("click",function(){
    		autoscroll = true;
    		var i = panels.length-2;
			var panel = $($(".panel.stacked")[i])
			var steptop = panel.offset().top
			var downward = (i>nfocus)? true : false;
			panelBlur($(".panel.stacked.focused"), nfocus)
			nfocus = i
			$("html, body").stop().animate({ scrollTop: steptop }, 700, 'swing', function(){
				autoscroll=false;
				panelFocus(panel,nfocus,downward)
			});
		  });

		function panelFormat(){
			winH = $(window).height()
			buffer = (winH<=900)? winH*0.1 : winH*0.2;
			var winW = $(window).width()
			winH = (winH<=1000 || winW<=1000)? (winH > winW)? winH*1.45 : winW*1.5: winH;
			if(settings.windowMinHeight) panels.css("min-height", winH)
			if(settings.stepper ) stepper.css("min-height", winH)
			
			if(fixpanel.length>0) fixpanel.css({"height": winH, "width": panelbox.outerWidth()});
			panelboxtop = panelbox.offset().top,
			panelboxbottom = panelboxtop + panelbox.outerHeight()
		}
		panelFormat()


		function panelScrolled(){
			doctop = (window.scrollY)? window.scrollY : (document.documentElement && document.documentElement.scrollTop)? document.documentElement.scrollTop : document.body.scrollTop;
			if(prevtop==doctop) return
			baseval = (winH*0.5)+doctop;
			var downward = (prevtop<=doctop)? true:false;
			panelFix()
			prevtop = doctop
			if(autoscroll) return
			panelLens(downward)
		}


		window.onscroll = document.onscroll = function(){
			panelScrolled()
		}

		function panelFix(){
			tbfixed.each(function(i,fx){
				fx = $(fx)
				var steptest = fx.hasClass("panelstepper")
				if(doctop>=panelboxtop && !fx.hasClass("afixed")){
					fx.addClass("afixed");
					var css = {}
					css[settings.stepalign] = (($(window).width()-panelbox.outerWidth())*0.5)+24 
					if(steptest) fx.css(css)
				} else if(doctop<=panelboxtop && fx.hasClass("afixed")){
					fx.removeClass("afixed");
					var css = {}
					css[settings.stepalign] = 24 
					if(steptest) fx.css(css)
				}
				var bottomcheck = panelboxbottom-doctop-winH
				if(bottomcheck<0){
					fx.addClass("offsetb");
				} else if(bottomcheck>0 && fx.hasClass("offsetb")) {
					fx.removeClass("offsetb");
				}
			})
		}


		function panelLens(downward){
			panels.each(function(i,panel){
				var panel = $(panel),
					paneltop = panel.offset().top,
					panelbottom = paneltop+ panel.outerHeight();
				if(downward){
					if(baseval+buffer>=paneltop && baseval-buffer<=panelbottom && !panel.hasClass("focused") && i>nfocus){
						panelFocus(panel,i,downward)
						if(i>0) panelBlur($(panels[i-1]),i-1)
					}
				} 
				else {
					if(baseval+buffer>=paneltop && baseval-buffer<=panelbottom && !panel.hasClass("focused") && i<nfocus){
						panelFocus(panel,i,downward)
						panelBlur($(panels[i+1]),i+1)
					}
				}
				if(i>nfocus+1 || i<nfocus-1){
					if(panel.hasClass("focused")) panelBlur(panels,i)
				}
			})
		}

		function panelFocus(panel,i,downward){
			nfocus = i
			panel.addClass("focused")
			panel[0].dispatchEvent(focusevent)
			$.fn.scrollpage.currentp = nfocus
			
			if(settings.stepper){
				$('.step.focused').removeClass("focused")
				$('.step[data-step="'+i+'"]').addClass("focused")
				stepper.css("min-height", panel.outerHeight()-30)
			}

			if(!autoscroll && settings.snap){
				if(i==0 && downward) return
				disable_scroll()
				var steptop = panel.offset().top
				autoscroll = true;
				$("html, body").stop().animate({ scrollTop: steptop+2 },777, function(){ setTimeout(enable_scroll,1); autoscroll = false; });
			}
			tracker('load', String(nfocus));
		}
		function panelBlur(panel,i){
			panel.removeClass("focused")
			panel[0].dispatchEvent(blurevent)
		}

		$(window).on("resize", function(){
			$.fn.scrollpage.resizePage();
		})

		$.fn.scrollpage.resizePage = function(){
			panelFormat()
			panelFocus($(".panel.focused"),nfocus,true)
			//panelScrolled()
		}

		var keys = [37, 38, 39, 40];
		function preventDefault(e) {
		  e = e || window.event;
		  if (e.preventDefault)
			  e.preventDefault();
		  e.returnValue = false;  
		}
		function wheel(e) {
		  preventDefault(e);
		}
		function keydown(e) {
			for (var i = keys.length; i--;) {
				if (e.keyCode === keys[i]) {
					preventDefault(e);
					return;
				}
			}
		}
		function disable_scroll() {
		  if (window.addEventListener) {
			  window.addEventListener('DOMMouseScroll', wheel, false);
		  }
		  window.onmousewheel = document.onmousewheel = wheel;
		  document.onkeydown = keydown;
		}
		function enable_scroll() {
			if (window.removeEventListener) {
				window.removeEventListener('DOMMouseScroll', wheel, false);
			}
			window.onmousewheel = document.onmousewheel = document.onkeydown = null;
		}

		setTimeout(panelScrolled, 1)

		return this
 
	};
 
}( jQuery || {} ));


