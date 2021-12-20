function updateweb() {
var search  = document.getElementById("search")
var web = document.getElementById("web")
var title = document.getElementById("title")

if (web.contentWindow.location == window.location.protocol + "//" + window.location.hostname + "/home/") {
search.value = ""
} else {
var fullurl = web.contentWindow.location.href
search.value = fullurl.split('/service/')[1]
}

if (web.contentWindow.document.title !== "") {
title.innerText = web.contentWindow.document.title
} else {
var fullurl = web.contentWindow.location.href
title.innerText = fullurl.split('/service/')[1]
}
}

function forward() {
var web = document.getElementById("web")
web.contentWindow.history.forward();
}

function back() {
var web = document.getElementById("web")
web.contentWindow.history.back();
}

function reload() {
var web = document.getElementById("web")
web.contentWindow.location.reload()
//web.src += ""
}

function home() {
var web = document.getElementById("web")
web.src = "/home"
}

function homemore() {
var web = document.getElementById("web")
web.src = "/home" 

var more = document.getElementById("more")
var morebtn = document.getElementById("morebtn")
if (more.style.display == "initial") {
    more.style.display = "none"
    morebtn.classList.remove("morebtnactive")
}
}

function setweb() {
var web = document.getElementById("web")
var search  = document.getElementById("search")
web.src = "/service/gateway?url=" + search.value
}

window.onload = function() {
var search  = document.getElementById("search")
search.onkeypress=function(e){
    if(e.keyCode==13){
        if (search.value !== "") {
             setweb()
        }
    }
}
}

function inspect() {
var inspect = document.getElementById("web").contentWindow.document.createElement("script");
inspect.src = "https://cdn.jsdelivr.net/gh/FogNetwork/Avo/avo.min.js";
document.getElementById("web").contentWindow.document.body.appendChild(inspect)

var more = document.getElementById("more")
var morebtn = document.getElementById("morebtn")
if (more.style.display == "initial") {
    more.style.display = "none"
    morebtn.classList.remove("morebtnactive")
}
}

function more() {
var more = document.getElementById("more")
var morebtn = document.getElementById("morebtn")
  if (more.style.display == "none") {
    more.style.display = "initial"
    morebtn.classList.add("morebtnactive")
  } else {
    more.style.display = "none"
    morebtn.classList.remove("morebtnactive")
  }
}

function fullscreen() {
  var web = document.getElementById("web")
  web.requestFullscreen()
}