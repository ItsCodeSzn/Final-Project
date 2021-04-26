const button = document.getElementById('button')
let audioButtonSrc = document.getElementById('audio')
let audioButton = document.getElementById('audioButton')
let textBox = document.getElementById('text-data')



const getTextData = () => {
	return textBox.value
}

const getSong = () => {
	let search = getTextData()
	let songData;
	const getTopTracks = $.get(`https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=${search}&type=track`);
	getTopTracks
		.then(resp =>  {
			// resp.search.data.tracks[0].previewURL
			return {
				track: resp.search.data.tracks[0].previewURL,
				album: resp.search.data.tracks[0].albumId
			}
		})
		.then (data => songData = data)
		.then(() => {
			setSong(songData.track)
			setImage(songData.album)
		})
}

const setSong = (song) => {
	$('#audio').attr("src", song).detach().appendTo('#audioButton')
	audioButton.load()
	audioButton.play()
}

const setImage = (album) => {
	console.log()
	$('#cover').attr("src",`http://direct.rhapsody.com/imageserver/v2/albums/${album}/images/300x300.jpg`)
}

button.addEventListener("click", getSong)