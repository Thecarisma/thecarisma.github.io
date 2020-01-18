
openHome();

function openHome() {
    openDivById("Home");
}

function openDivById(id) {
    var el = document.getElementById('main');
    var arr = el.childNodes;
    for (var a = 0; a < arr.length; a++) { 
        arr[a].display = "none"; 
    }
    document.getElementById(id).display = "block";
}