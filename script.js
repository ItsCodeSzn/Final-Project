const button = document.getElementById('button')
let audioButtonSrc = document.getElementById('audio')
let audioButton = document.getElementById('audioButton')
let textBox = document.getElementById('text-data')



const getTextData = () => {
	return textBox.value
}

const getSong = () => {
	let search = getTextData()
	let song;
	const getTopTracks = $.get(`https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=${search}&type=track`);
	getTopTracks
		.then(resp => resp.search.data.tracks[0].previewURL)
		.then (data => song = data)
		.then(() => {
			setSong(song)
		})
}

const setSong = (song) => {
	$('#audio').attr("src", song).detach().appendTo('#audioButton')
	audioButton.load()
	audioButton.play()
}

button.addEventListener("click", getSong)