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