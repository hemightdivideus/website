var number = 1
function nextVideo() {
number = number + 1;
var video = document.getElementById('#myVideo');
video.src = "video"+number.toString()+".mp4";
video.load();
}
