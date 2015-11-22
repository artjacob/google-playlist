$(function() {
	var $table = $("table tbody");

	$.getJSON("/_data/400.json").done(function(data) {
		var songs = data[1][0];
		var count = 1;

		$.each(songs, function(index, value) {
			var $song = $("<tr />");
			$("<td />").html(count).appendTo($song);
			$("<td />").html(value[1]).appendTo($song);
			$("<td />").html(value[3]).appendTo($song);

			$song.appendTo($table);
			count++;
		});
	});
});
