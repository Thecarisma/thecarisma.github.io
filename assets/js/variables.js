
const AllBlogPosts = [
    {
        title: "Managing Windows PFX certificates through PowerShell",
        link: "https://dev.to/iamthecarisma/managing-windows-pfx-certificates-through-powershell-3pj",
        site: "dev.to",
        tags: "#powershell #windows #system #cli",
        date: "Jan 17 2020"
    },
    {
        title: "Enabling and disabling USB Disk Drive using C#",
        link: "https://dev.to/iamthecarisma/enabling-and-disabling-usb-disk-drive-using-c-4dg5",
        site: "dev.to",
        tags: "#csharp #dotnet #windows #devmgmt",
        date: "Dec 4 2019"
    }
]

const AllProjects = [
    {
        name: "Cronux",
        description: "Handy, hacky commands to perform simple and complex task in Windows and Linux CLI",
        techs: "#powershell #batch #bash",
        type: "cli application",
        main_url: "https://github.com/Thecarisma/Cronux",
        links: [
            {
                url: "https://github.com/Thecarisma/Cronux",
                icon_class: "fab fa-github"
            },
            {
                url: "https://thecarisma.github.io/Cronux",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "libo-types",
        description: "A library of generic, complex data types and structures for C",
        techs: "#c #c++ #makefile",
        type: "library",
        main_url: "https://github.com/liboprojects/libo-types",
        links: [
            {
                url: "https://github.com/liboprojects/libo-types",
                icon_class: "fab fa-github"
            },
            {
                url: "https://liboprojects.github.io/libo-types/",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "libo-processes",
        type: "library",
        description: "Get list of running processes and listen to process life cycle with callback",
        techs: "#c++ #makefile",
        main_url: "https://liboprojects.github.io/libo-processes",
        links: [
            {
                url: "https://github.com/liboprojects/libo-processes",
                icon_class: "fab fa-github"
            },
            {
                url: "https://liboprojects.github.io/libo-processes",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "language-colors",
        type: "library",
        description: "GitHub programming languages color codes in CSS, NodeJS and Javascript.",
        techs: "#css #javascript #nodejs #powershell",
        main_url: "https://quickutils.github.io/language-colors/",
        links: [
            {
                url: "https://github.com/quickutils/language-colors",
                icon_class: "fab fa-github"
            },
            {
                url: "https://quickutils.github.io/language-colors/",
                icon_class: "fa fa-globe"
            },
            {
                url: "https://quickutils.github.io/language-colors/language-colors.js",
                icon_class: "fab fa-js"
            },
            {
                url: "https://www.npmjs.com/package/language-colors",
                icon_class: "fab fa-npm"
            },
            {
                url: "https://quickutils.github.io/language-colors/language-colors.css",
                icon_class: "fab fa-css3"
            }
        ]
    },
    {
        name: "key-value-db",
        type: "library",
        description: "Light weight package to quickly and easily manage, load, update and save key-value type database. Implemented in multiple languages.",
        techs: "#java #python #csharp #c #nodejs #simple #go #nodejs",
        main_url: "https://keyvaluedb.github.io/",
        links: [
            {
                url: "https://github.com/keyvaluedb",
                icon_class: "fab fa-github"
            },
            {
                url: "https://keyvaluedb.github.io/",
                icon_class: "fa fa-globe"
            },
            {
                url: "https://github.com/keyvaluedb/key-value-db-c",
                icon_class: "devicon-c-plain"
            },
            {
                url: "https://www.npmjs.com/package/@thecarisma/key-value-db",
                icon_class: "fab fa-npm"
            },
            {
                url: "https://github.com/keyvaluedb/key-value-db-java",
                icon_class: "fab fa-java"
            },
            {
                url: "https://pypi.org/project/key-value-db/",
                icon_class: "fab fa-python"
            },
            {
                url: "https://www.nuget.org/packages/KeyValueDB/",
                icon_class: "devicon-csharp-plain"
            }
        ]
    },
    {
        name: "repo-page-scripts",
        type: "web",
        description: "Static website generator for GitHub repository, profile, and organisation using a single script. Just drop index.html and deploy.",
        techs: "#html #css #javascript #batch",
        main_url: "https://quickutils.github.io/repo-page-scripts/",
        links: [
            {
                url: "https://github.com/quickutils/repo-page-scripts",
                icon_class: "fab fa-github"
            },
            {
                url: "https://quickutils.github.io/repo-page-scripts/",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "libo-notify",
        type: "library",
        description: "Send system notification on various platforms.",
        techs: "#c++ #makefile #c #bash",
        main_url: "https://github.com/liboprojects/libo-notify",
        links: [
            {
                url: "https://github.com/liboprojects/libo-notify",
                icon_class: "fab fa-github"
            },
            {
                url: "https://liboprojects.github.io/libo-notify",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "clifilemaster.js",
        type: "library",
        description: "A command-line file picker for nodejs with promise support.",
        techs: "#c++ #makefile #c #bash",
        main_url: "https://github.com/Thecarisma/clifilemaster.js",
        links: [
            {
                url: "https://github.com/Thecarisma/clifilemaster.js",
                icon_class: "fab fa-github"
            },
            {
                url: "https://github.com/Thecarisma/clifilemaster.js",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "devjammer",
        type: "cli application",
        description: "Regain device access if denied/disabled by other programs (esp. device control programs, ransomware)",
        techs: "#javascript #html #css",
        main_url: "https://thedarkprojects.github.io/devjammer/",
        links: [
            {
                url: "https://github.com/Thecarisma/screenshot_it",
                icon_class: "fab fa-github"
            },
            {
                url: "https://thedarkprojects.github.io/devjammer/",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "audio-tube",
        type: "library",
        description: "A plain script and wordpress plugin to embed a youtube, vimeo and other videos as audio on your website or wordpress site",
        techs: "#php #wordpress #javascript",
        main_url: "https://github.com/liboprojects/libo-notify",
        links: [
            {
                url: "https://github.com/Thecarisma/audio-tube",
                icon_class: "fab fa-github"
            },
            {
                url: "https://github.com/Thecarisma/audio-tube",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "dec2bin",
        type: "script",
        description: "Convert a binary to decimal and decimal to binary (according to The Art of Assembly Language Book Chapter 1).",
        techs: "#python",
        main_url: "https://quickutils.github.io/dec2bin/",
        links: [
            {
                url: "https://github.com/quickutils/dec2bin",
                icon_class: "fab fa-github"
            },
            {
                url: "https://quickutils.github.io/dec2bin/",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "stitchvariable",
        type: "script",
        description: "Initiate a variable name change on a Java source file, support wildcard in variable name manipulation",
        techs: "#python",
        main_url: "https://quickutils.github.io/stitchvariable/",
        links: [
            {
                url: "https://github.com/quickutils/stitchvariable",
                icon_class: "fab fa-github"
            },
            {
                url: "https://quickutils.github.io/stitchvariable/",
                icon_class: "fa fa-globe"
            }
        ]
    },
    {
        name: "screenshot_it",
        type: "bot",
        description: "Initiate a variable name change on a Java source file, support wildcard in variable name manipulation",
        techs: "#javascript #html #css",
        main_url: "https://github.com/Thecarisma/screenshot_it",
        links: [
            {
                url: "https://github.com/Thecarisma/screenshot_it",
                icon_class: "fab fa-github"
            },
            {
                url: "https://github.com/Thecarisma/screenshot_it",
                icon_class: "fa fa-globe"
            }
        ]
    }
]












