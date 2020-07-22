
openHome();
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

function selectProjectType(node, className) {
    var projectChilds = document.getElementsByClassName('type-title');
    for (var projectChild of projectChilds) {
        projectChild.style.color = 'white';
        projectChild.onmouseover = function() { this.style.color = "#70c8ff"; }
        projectChild.onmouseleave = function() { this.style.color = "white"; }
    }
    node.style.color = '#70c8ff';
    node.onmouseleave = null;
    projectChilds = document.getElementsByClassName('project');
    for (var projectChild of projectChilds) {
        projectChild.style.display = 'none';
    }
    if (className === "all") {
        projectChilds = document.getElementsByClassName("project");
    } else {
        projectChilds = document.getElementsByClassName(className);
    }
    for (var projectChild of projectChilds) {
        projectChild.style.display = 'block';
    }
}

function treatVariables() {
    //blog posts
    var count = 0;
    for (var blog of AllBlogPosts) {
        //on 4 stop for home
        var blogHTML = `
                <div>
                    <a href="${blog.link}">${blog.title}</a><br/>
                    <span style="font-size:20px;">${blog.date} - ${blog.site} <br/>
                    ${blog.tags}</span>
                </div>
        `;
        
        //if (count < 4) { document.getElementById("featured-blog-posts").innerHTML += blogHTML; }
        document.getElementById("all-posts").innerHTML += blogHTML;
        count++;
    }
    
    //projects
    for (var project of AllProjects) {
        //on 4 stop for home
        var pHTML = `
                <div class="project ${project.type.replace(' ', '-')}">
                    <a href="${project.main_url}"><span class="title">${project.name}</span></a><br/>
                    <!--<span class="project-type">${project.type}</span><br/>-->
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
        
        //if (count < 4) { document.getElementById("featured-projects").innerHTML += pHTML; }
        document.getElementById("all-projects").innerHTML += pHTML;
    }
    //selectProjectType(document.getElementById("selected-project"), 'main-project');
}




