/*
SEGA Nerds app for Chrome-compatible systems
2014-2015 espectalll123 <espectalll123@kydara.com>

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
	$(".fa-circle-o-notch").css("opacity", 1); // Have to rewrite with Angular.js
	$.ajax({
		url: "http://www.seganerds.com/?json=1",
	})
	.done(function(data) {
		for (i = 0; i < data.posts.length; i++) {
			$("#content").append('<h1>' + data.posts[i].title + '</h1>');
		}
		$(".fa-circle-o-notch").css("opacity", 0);
    	})
	.fail(function(data) {
		$("#content").append('<div class="alert alert-danger">');
		$('.alert-danger').append('<strong>Whoopsie!</strong>');
		$('.alert-danger').append(' It seems that all your base are belong to us');
		$(".fa-circle-o-notch").css("opacity", 0);
	});
};
