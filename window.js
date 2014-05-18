var thisWindow = chrome.app.window.current();
var searchIs = false;

$(document).ready(function() {
	getIndex();
	$("#dragBar").css({"width": $(window).width()-424});
	$(window).resize(function() {
		winWidth = $(window).width();
		if (winWidth > 1024) {
			$("#content").css({"width": winWidth-320});
		} else {
			$("#content").css({"width": 700});
		};
		if (searchIs) {
			$("#dragBar").css({"width": winWidth-680});
		} else {
			$("#dragBar").css({"width": winWidth-424});
		};
	});
    $("#minBtn").click(function(){
        thisWindow.minimize()
    }); 
    $("#closeBtn").click(function(){
        thisWindow.close()
    });
    $("#tmBox").mouseenter(function(){
        $("#titleMenu").css({"display": "block"});
        $("#titleMenu").animate({opacity: 1}, 100);
    });
    $("#searchBtn").click(function(){
        if (searchIs) {
        	$("#dragBar").css({"width": $(window).width()-424});
        	$("#dragBar").css({"left": "296px"});
        	$("#searchBox").animate({width: 0}, 100, function(){
        		$(this).css({"display": "none"});
        	});
        	searchIs = false;
        } else {
        	$("#dragBar").css({"width": $(window).width()-680});
        	$("#dragBar").css({"left": "552px"});
        	$("#searchBox").animate({width: "238px"}, 100);
        	$("#searchBox").css({"display": "block"});
        	searchIs = true;
        };
    });
    $(".tmClickable").click(function(){
    	$("#titleMenu").animate({opacity: 0}, 100, function(){
    		$(this).css({"display": "none"});
    	});
    });
    $("#tmFS").click(function(){
    	if (!thisWindow.isFullscreen()) {
        	thisWindow.fullscreen();
        	$("#minBtn").css({"display": "none"});
        } else {
        	thisWindow.restore();
        	$("#minBtn").css({"display": "block"});
        };
    });
    $("#titleMenu").mouseleave(function(){
    	$("#titleMenu").animate({opacity: 0}, 100, function(){
    		$(this).css({"display": "none"});
    	});
    });
});