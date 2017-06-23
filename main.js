$("document").ready(function() {

	var quoteBtn = $("#quoteBtn");
	var randomQuote = $("#random-quote");
	var author = $("#author");
	var tweet = $("#tweet");

	var randomColorBackground = $(".random-color-background");
	var randomColorText = $(".random-color-text");

	function updateQuote(data) {
		randomQuote.html(data.quote);
		author.text("- " + data.author);
		var newHref = "https://twitter.com/share?text=\"" + data.quote + "\" " + data.author + "&hashtags=quotes";
		tweet.attr("href", newHref);
		var newColor = getRandomColor();
		randomColorBackground.css("background-color", newColor);
		randomColorText.css("color", newColor);
	}

	function getNewQuote() {
		$.ajax({
			headers: {"X-Mashape-Key": "This is a secret key"},
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
			success: function(data) {
				if (typeof updateQuote === 'function') {
					updateQuote(data);
				}
			}
		});
	}

	quoteBtn.on("click", getNewQuote);


	getNewQuote();


}); // END OF JQUERY


function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


// Remember the shorthand
/*

$(function() {

});

*/