
openHome();
treatVariables();

function openHome() {
    openDivById("Home");
    setIconColor("fa-home");
}

function openProjects() {
    //openDivById("Projects");
    setIconColor("fa-align-center");
}

function openBlog() {
    setIconColor("fa-edit");
}

function openContact() {
    //openDivById("Contact");
    setIconColor("fa-paper-plane");
}

function openDivById(id) {
    var el = document.getElementById('main');
    var arr = el.childNodes;
    for (var a = 0; a < arr.length; a++) { 
        arr[a].display = "none"; 
    }
    document.getElementById(id).display = "block";
    document.getElementById(id).display = "block";
}

function setIconColor(id) {
    var iconIds = ["fa-home", "fa-align-center", "fa-edit", "fa-paper-plane"];
    for (var iconId of iconIds) {
        document.getElementById(iconId).style.color = "white";
    }
    document.getElementById(id).style.color = "#00ff6a"
}

function treatVariables() {
    for (var blog of BlogPostFeatured) {
        document.getElementById("featured-blog-posts").innerHTML += `
                <div>
                    <a href="${blog.link}">${blog.title}</a><br/>
                    <span style="font-size:20px;">${blog.date} - ${blog.site} <br/>
                    ${blog.tags}</span>
                </div>
        `;
    }
}