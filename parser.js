const fs = require("fs-extra");

let songs = [ ];
let raw_songs = fs.readJSONSync("./data/400.json")[1][0];

raw_songs.forEach((raw_song) => {
	let song = {
		"title": raw_song[1],
		"artist": raw_song[3],
		"artist-picture": raw_song[36],
		"album": raw_song[4],
		"album-artist": raw_song[5],
		"album-cover": raw_song[2],
		"album-track": raw_song[14],
		"length": raw_song[13] / 1000,
		"year": raw_song[18],
		"genre": raw_song[11],
		"youtube-id": raw_song[52],
		"price": (raw_song[58] && raw_song[58][0]? raw_song[58][0] / 1000000 : null)
	};

	songs.push(song);
});

fs.outputJSONSync("./data/songs.json", songs, {
	"spaces": "\t"
});
