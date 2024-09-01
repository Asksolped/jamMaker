const gandalfJam = document.querySelector("#gandalf-jam");

gandalfJam.addEventListener("click", function addGandalf() {
  const videos = ["video/Gandalfjam.mp4", "video/hobbitjam.mp4"];

  const randomvideo = videos[Math.floor(Math.random() * videos.length)];

  const videoContainer = document.querySelector("#jam-container");

  const existingVideo = videoContainer.querySelector("video");
  if (existingVideo) {
    videoContainer.removeChild(existingVideo);
  }

  var video = document.createElement("video");

  video.setAttribute("autoplay", "true");
  video.setAttribute("controls", "true");
  video.setAttribute("width", "600");

  var source = document.createElement("source");

  source.setAttribute("src", randomvideo);
  source.setAttribute("type", "video/mp4");

  video.appendChild(source);

  videoContainer.appendChild(video);
});
