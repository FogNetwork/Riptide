window.addEventListener('load', function() {
var search = document.getElementById("search");
search.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        go()
    }
});
})

function go() {
    var search = document.getElementById("search")
    if (search.value !== "") {
    window.location.href = "/service/gateway?url=" + search.value
    search.value = ""
    }
}

function showsettings() {
    
}