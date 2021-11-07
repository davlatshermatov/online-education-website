let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.scroll = () => {
  navbar.classList.remove("active");
};

// =================================================================================

let mainVid = document.querySelector(".main-video");
let videos = document.querySelectorAll(".course-3 .box .video video");

videos.forEach((video) => {
  video.onclick = () => {
    let src = video.getAttribute("src");
    mainVid.querySelector("video").src = src;
    mainVid.classList.add("active");
  };
});

document.querySelector("#close-video").onclick = () => {
  mainVid.classList.remove("active");
};
