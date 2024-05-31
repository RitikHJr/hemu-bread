textHide();
loveTextHide();
playMusic();
pauseMusic2();
hideContainer();
hideMoonImg();

function hideMoonDropDown() {
  var moons = document.getElementById("moons");
  moons.style.display = "none";
}

function showMoonDropDown() {
  var moons = document.getElementById("moons");
  moons.style.display = "block";
}

function hideInstruction() {
  var instruction = document.getElementById("instruction-p");
  instruction.style.display = "none";
}

function playClick() {
  var playContainer = document.getElementById("playContainer");
  playContainer.style.display = "none";
  showContainer();
  playMusic();
}
function hideContainer() {
  var text = document.getElementById("container");
  text.style.display = "none";
}
function showContainer() {
  var text = document.getElementById("container");
  text.style.display = "flex";
}

function hideElementAfter5sec() {
  var text = document.getElementById("text");

  setTimeout(function () {
    text.style.display = "none";
  }, 5000);
}
function showLoveElementAfter5sec() {
  setTimeout(function () {
    loveTextShow();
  }, 3500);
}
function textHide() {
  document.getElementById("text").style.display = "none";
}
function loveTextHide() {
  document.getElementById("love").style.display = "none";
}
function textShow() {
  document.getElementById("text").style.display = "block";
  setTimeout(function () {
    textHide();
  }, 3500);
}
function loveTextShow() {
  document.getElementById("love").style.display = "block";
}
function moonClick(e) {
  showMoonImg();
  const clickedOn = e.value;
  var image = document.getElementById("moonImg");
  if (clickedOn == "144p") {
    image.src = "144p.jpeg";
    image.style.width = "80px";
  }
  if (clickedOn == "240p") {
    image.src = "240p.jpeg";
    image.style.width = "80px";
  }
  if (clickedOn == "480p") {
    image.src = "480p.jpeg";
    image.style.width = "80px";
  }
  if (clickedOn == "720p") {
    image.src = "720p.jpeg";
    image.style.width = "80px";
  }
  if (clickedOn == "1080p") {
    image.src = "1080p.jpeg";
    image.style.width = "200px";
    image.style.borderRadius = "10%";
    hideMoonDropDown();
    playMusic2();
    pauseMusic();
    textShow();
    showLoveElementAfter5sec();
    hideElementAfter5sec();
    hideInstruction();
  }
}

function hideMoonImg() {
  var moonImg = document.getElementById("moonImg");
  moonImg.style.display = "none";
}

function showMoonImg() {
  var moonImg = document.getElementById("moonImg");
  moonImg.style.display = "block";
}

function pauseMusic() {
  var audio = document.getElementById("backgroundMusic");
  audio.pause();
}
function playMusic() {
  var audio = document.getElementById("backgroundMusic");
  audio.play();
}

function pauseMusic2() {
  var audio = document.getElementById("backgroundMusic2");
  audio.pause();
}
function playMusic2() {
  var audio = document.getElementById("backgroundMusic2");
  audio.play();
}
