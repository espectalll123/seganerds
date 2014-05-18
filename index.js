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
    			$("#content").html('<p class="error"><img src="img/ohno.png" /><br />Something went wrong!</p>');
    		};
    	}});
};
function displayIndex(content) {
	index = jQuery.parseJSON(content)
	var postList = "";
	for (var i = 0; i < index.length; i++) {
		postList += "<h1>" + index[i].the_title + "</h1>";
		postList += "<h2>" + index[i].the_excerpt.
			replace(" [&hellip", "")
			+ "..." + "</h2>";
	};
	$("#content").html(postList);
};
