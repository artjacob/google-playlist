$(function() {
	var $table = $("table tbody");
	var $pre = $("pre");

	$.getJSON("data/400.json").done(function(data) {
		var songs = data[1][0];
		var count = 1;

		$.each(songs, function(index, value) {
			var $song = $("<tr />");
			$("<td />").addClass("count").html(count).appendTo($song);
			$("<td />").addClass("song-title").html(value[1]).appendTo($song);
			$("<td />").html(value[3]).appendTo($song);
			$("<td />").addClass("length").html(secondsToHumanDuration(value[13] / 1000)).appendTo($song);
			$("<td />").html(value[18]).appendTo($song);

			if(value[52]) {
				var $youtube_link = $("<a />").attr("href", "https://youtu.be/" + value[52]).html("YouTube");
				$("<td />").addClass("youtube-link").append($youtube_link).appendTo($song);
			} else {
				$("<td />").appendTo($song);
			}

			$song.appendTo($table);

		//	$("<div />").text("#EXTINF:" + (value[13] / 1000) + "," + value[1]).appendTo($pre);
		//	$("<div />").text("/Users/arthur/Music/" + value[1] + ".m4a").appendTo($pre);

			count++;
		});
	});
});

function secondsToHumanDuration(seconds) {
	var minutes = Math.floor(seconds / 60);
	var trailing_seconds = Math.floor(seconds - (minutes * 60));

	var human_duration = minutes + ":" + (trailing_seconds > 10? trailing_seconds : "0" + trailing_seconds);

	return human_duration;
}
