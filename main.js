$("document").ready(function() {
	var quoteBtn = $("#quoteBtn");
	var randomQuote = $("#random-quote");
	var author = $("#author");
	var tweet = $("#tweet");

	


	function updateQuote(data) {
		randomQuote.html(data.quote);
		author.text("- " + data.author);
		var newHref = "https://twitter.com/share?text=\"" + data.quote + "\" " + data.author + "&hashtags=quotes";
		tweet.attr("href", newHref);
	}

	function getNewQuote() {
		$.ajax({
			headers: {"X-Mashape-Key": "pc5WtyP9MdmshQCnTjhROxZeUgJyp1mHb9Ojsn8Y5LAgQIhjdE"},
			url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
			success: function(data) {
				if (typeof updateQuote === 'function') {
					updateQuote(data);
				}
			}
		});
	}

	quoteBtn.click(getNewQuote);


	getNewQuote();



}); // END OF JQUERY



// Remember the shorthand
/*

$(function() {

});

*/