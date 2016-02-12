$(function() {
	var $table = $("table tbody");
	var $pre = $("pre");

	$.getJSON("data/400.json").done(function(data) {
		var songs = data[1][0];
		var count = 1;

		$.each(songs, function(index, value) {
			var $song = $("<tr />");
			$("<td />").html(count).appendTo($song);
			$("<td />").html(value[1]).appendTo($song);
			$("<td />").html(value[3]).appendTo($song);
			$("<td />").html((value[13] / 1000)).appendTo($song);
			$("<td />").html(value[18]).appendTo($song);

			$song.appendTo($table);

		//	$("<div />").text("#EXTINF:" + (value[13] / 1000) + "," + value[1]).appendTo($pre);
		//	$("<div />").text("/Users/arthur/Music/" + value[1] + ".m4a").appendTo($pre);

			count++;
		});
	});
});
