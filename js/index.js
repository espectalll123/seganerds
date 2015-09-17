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
	var content = document.createElement("div");
    	content.id = "content";
	document.body.appendChild(content);
	$.ajax({
		url: "http://www.seganerds.com/?json=1",
	})
	.done(function(data) {
		for (i = 0; i < data.posts.length; i++) {
			$("#content").append('<h1>' + data.posts[i].title + '</h1>');
		}
    	})
	.fail(function(data) {
		var content = document.createElement("div");
    		content.id = "content";
		document.body.appendChild(content);
		$("#content").append('<img src="img/ohno.png" /><br />');
		$("#content").append('<p class="error">Something went wrong!</p>');	
	});
};
