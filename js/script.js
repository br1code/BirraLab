var myvids = ["videos/maceracion.mp4", "videos/hervor.mp4", 
              "videos/enfriado.mp4", "videos/fermentacion.mp4", 
              "videos/maduracion.mp4", "videos/embotellamiento.mp4"];
var myvid = document.getElementById('myvideo');
var activeVideo = 0;

function play(){
  myvid.addEventListener('ended', addVideos);
}

function addVideos(e) {
  if (activeVideo + 1 === myvids.length) {
    myvid.removeEventListener('ended', addVideos)
  }
  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  highlight();
  // update the new active video index
  activeVideo = (++activeVideo);
}

function startInstr() {
  setTimeout(() => {
    myvid.play();
  }, 500);
}

function highlight() {
  $("#pasoAPaso li").removeClass("highlight");
  $(`#${activeVideo}`).addClass("highlight");
}

