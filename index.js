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

function getIndex() {
	$.ajax({
		url: "http://www.seganerds.com/?jsonposts=1",
		/* The readyState bug must be fixed in the future.
		Meanwhile, let's enjoy some awkwardness!!! :D
		
		success: function(data) {
    	}, */
    	error: function(data) {
    		if (data.readyState == 4) {
    			displayIndex(data.responseText.split("</script>\n")[1]);
    		} else {
    			var content = document.createElement("div");
    			content.id = "content";
    			var error = document.createElement("p");
    			error.className = "error";
    			var ohno = document.createElement("img");
    			ohno.src = "img/ohno.png";
    			var br = document.createElement("br");
    			var error_text = document.createTextNode(
    				"Something went wrong!");
    			error.appendChild(ohno);
    			error.appendChild(br);
    			error.appendChild(error_text);
    			content.appendChild(error);
    			document.body.appendChild(content);
    		};
    	}});
};
function displayIndex(content) {
	index = jQuery.parseJSON(content);
	var postList = "";
	var content = document.createElement("div");
	content.id = "content";
	for (var i = 0; i < index.length; i++) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", index[i].the_post_thumbnail[0], true);
		xhr.responseType = "blob";
		xhr.onload = function(e) {
  			var img = document.createElement("img");
  			img.className = "post-image";
  			img.src = window.URL.createObjectURL(this.response);
  			content.appendChild(img);
		};
		xhr.send();
		var h1 = document.createElement("h1");
		var h1_text = document.createTextNode(
			Encoder.htmlDecode(index[i].the_title));
		h1.appendChild(h1_text);
		content.appendChild(h1);
		var p = document.createElement("p");
		p.className = "description";
		var p_text = document.createTextNode(
			Encoder.htmlDecode(
			index[i].the_excerpt.replace(
			" [&hellip", "") + "..."));
		p.appendChild(p_text);
		content.appendChild(p);
	};
	document.body.appendChild(content);
};
