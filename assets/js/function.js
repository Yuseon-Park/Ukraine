var base_url = window.location.origin;
var base_host = window.location.hostname;
var content = document.querySelector('.content');
var body = document.getElementsByTagName('BODY')[0];
var select = document.getElementById('menu');


const ELS_aVid = document.querySelectorAll(".hoverVid");

const toggleVideo = (ev) => {
  const EL = ev.currentTarget;
  const EL_video = EL.querySelector("video");
  const isPlay = ev.type === "mouseenter";
  EL_video[isPlay ? "play" : "pause"]();
};

ELS_aVid.forEach(EL => {
  ["mouseenter", "mouseleave"]
    .forEach(evt => EL.addEventListener(evt, toggleVideo))
});


function handleMenu(id, elm) {
    str = elm.value
    str = str.toLowerCase();
    if (str == "a recording score") {
        window.location = base_url + "/"
    } else {
        window.location = base_url + "/" + str;
    }
}



function internal_reference(id) {
    if (id) {
        var e = document.getElementById(id);
        e.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        slideIndex_drawer(e, id)
    }
}





function slideIndex_drawer(elm, url) {
    var selected_drawer = elm.nextSibling.nextSibling;

    if (elm.classList.contains("green_text")) {
        elm.classList.remove("green_text")
        if (selected_drawer.classList.contains("closed")) {
        } else {
            selected_drawer.classList.add("closed")
        }
    } else {
        elm.classList.add("green_text")
        selected_drawer.classList.remove("closed")
    }
    var hist_str = "#/" + url
    window.history.pushState(hist_str, 'Title', hist_str);

}
