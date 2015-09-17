/*
SEGA Nerds app for Chrome-compatible systems
2014 espectalll123 <espectalll123@outlook.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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
			$("#content").css({"width": 696});
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
