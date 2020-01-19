
openBlog();
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
    openDivById("Posts");
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
    var count = 0;
    for (var blog of AllBlogPosts) {
        //on 5 stop for home
        var blogHTML = `
                <div>
                    <a href="${blog.link}">${blog.title}</a><br/>
                    <span style="font-size:20px;">${blog.date} - ${blog.site} <br/>
                    ${blog.tags}</span>
                </div>
        `;
        
        if (count < 5) { document.getElementById("featured-blog-posts").innerHTML += blogHTML; }
        document.getElementById("all-posts").innerHTML += blogHTML;
        count++;
    }
    
    //projects
    for (var project of AllProjects) {
        //on 5 stop for home
        var pHTML = `
                <div class="project">
                    <a href="${project.main_url}"><span class="title">${project.name}</span></a>
                    <p class="description">
                    ${project.description}
                    </p>
                    <span class="tech-used">${project.techs}</span><br/>
                    <div class="links">`
         
            for (var lnink of project.links) {
                pHTML += `<a target="_blank" href="${lnink.url}"><i class="${lnink.icon_class}" style="color:white;"></i></a> `
            }
                        
        pHTML += `</div>
                </div>
        `;
        
        document.getElementById("all-projects").innerHTML += pHTML;
    }
}




