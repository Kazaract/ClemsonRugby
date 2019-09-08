function loadRSSCard(url, card, title, content)
{
	$.ajax(url, {
		accepts:{
			xml: "application/rss+xml"
		},
		dataType:"xml",
		success: function(data){
			console.log($(data).find("item").first().find("link").text());
			$(card).attr("href", $(data).find("item").first().find("link").text());
			$(title).html("<a class='twitter-author'>" + $(data).find("title").first().text() + "</a>");
			$(content).html("<p class='tweet-content'>" + $(data).find("item").first().find("title").text() + "</p>");
		}
	});
}

$(document).ready(function() {
	loadRSSCard("https://rss.app/feeds/LnHDNvmbpknhGXyf.xml", "#twitter-card", "#tweet-author", "#tweet-content");
});