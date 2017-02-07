var number = 1
var video = document.getElementById('myVideo');
function nextVideo() {
number = number + 1;
video.src = "video"+number.toString()+".mp4";
video.load();
}
