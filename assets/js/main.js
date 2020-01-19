
openProjects();
treatVariables();

function openHome() {
    openDivById("Home");
    setIconColor("fa-home");
}

function openProjects() {
    openDivById("Projects");
    setIconColor("fa-align-center");
}

function openBlog() {
    setIconColor("fa-edit");
}

function openContact() {
    openDivById("Contact");
    setIconColor("fa-paper-plane");
}

function openDivById(id) {
    var el = document.getElementById('main');
    var arr = el.childNodes;
    for (var a = 0; a < arr.length; a++) { 
        if (!arr[a].style) continue;
        arr[a].style.display = "none"; 
    }
    document.getElementById(id).style.display = "block";
}

function setIconColor(id) {
    var iconIds = ["fa-home", "fa-align-center", "fa-edit", "fa-paper-plane"];
    for (var iconId of iconIds) {
        document.getElementById(iconId).style.color = "white";
    }
    document.getElementById(id).style.color = "#00ff6a"
}

function treatVariables() {
    //blog posts
    for (var blog of AllBlogPosts) {
        //on 5 stop for home
        document.getElementById("featured-blog-posts").innerHTML += `
                <div>
                    <a href="${blog.link}">${blog.title}</a><br/>
                    <span style="font-size:20px;">${blog.date} - ${blog.site} <br/>
                    ${blog.tags}</span>
                </div>
        `;
    }
    
    //projects
    for (var project of AllProjects) {
        //on 5 stop for home
        var pHTML = `
                <div class="project">
                    <span class="title">${project.name}</span>
                    <p class="description">
                    ${project.description}
                    </p>
                    <span class="tech-used">${project.techs}</span><br/>
                    <div class="links">
                        <a target="_blank" href="https://github.com/Thecarisma"><i class="fab fa-github" style="color:white;"></i></a> 
                    </div>
                </div>
        `;
        
        document.getElementById("all-projects").innerHTML += pHTML;
    }
}




