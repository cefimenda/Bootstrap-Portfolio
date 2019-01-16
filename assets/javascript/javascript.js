$(function () {
    $(".carousel").carousel({
        interval: false
    })
    $(".portfolioLearnMore").click(function () {
        $(".myPortfolio").show()
        $(".aboutMe").hide()
        $(".contactMe").hide()
        var pillsList = $(".pillButton")
        for (var i = 0; i < pillsList.length; i++) {
            $(pillsList[i]).removeClass("activePill")
        }
        $(".projectsDisplay").empty()
        page.slideNumber = 1;

        $(".projectsDisplay").append(`<div id="macbook" class="col-12 col-lg-6 mx-auto"><img id="macbook-img" src="assets/images/macbook.png"><div id="slideContainer">
        <img id="macbookSlide" src="assets/images/code-penguin.png"></div></div><div class="col-12 col-lg-6"><h1 class="mx-auto display-4 display-4-sm text-center my-0">Select a category to start!</h1>
        <br><p class = "px-3" > Many of the projects displayed here were completed during my bootcamp at Columbia University and they all display different skills that I have learned and practiced up to now. While some of the projects are as simple as a front-end only game others can be as complicated as creating a distributed and decentralized system. </p></div>`);

        sliderBegin();

    })
    $(".aboutMeLearnMore").click(function () {
        $(".myPortfolio").hide()
        $(".aboutMe").show()
        $(".contactMe").hide()
    })
    $(".contactMeLearnMore").click(function () {
        $(".myPortfolio").hide()
        $(".aboutMe").hide()
        $(".contactMe").show()
    })
    $(".navbarAbout").click(function () {
        $(".aboutMeLearnMore").click()
    })
    $(".navbarPortfolio").click(function () {
        $(".portfolioLearnMore").click()
    })
    $(".navbarContact").click(function () {
        $(".contactMeLearnMore").click()
    })
    $(".learnMoreButtons").click(function () {
        setTimeout(function () {
            window.scroll({
                top: 400,
                behavior: 'smooth'
            })
        }, 100)
    })
    $(".pillButton").click(function () {
        var target = $(this).text().trim().split(" ")[0].trim();
        clearInterval(slideInterval)
        createProjectCards(target);
        var pillsList = $(".pillButton")
        for (var i = 0; i < pillsList.length; i++) {
            $(pillsList[i]).removeClass("activePill")
        }
        $(this).addClass('activePill')

    })
    $(document).on("click", ".info", function () {
        
        $(".techRow").show();
        $(".viewProject").show();
        $(".viewGithub").show();

        let project = JSON.parse($(this).attr("data"))
        $(".modal-title").text(project.name)
        $(".modal-subtitle").text(project.info.short)
        console.log(project.imageRef)
        $("#macbookSlide-modal").attr("src", project.imageRef)
        $(".infoContainer").text(project.info.detail)
        if(project.type==="Startups"){
            $(".roleHeader").text("Roles: ");
        }else{
            $(".roleHeader").text("Skills Highlighted: ");

        }
            $(".techContainer").text(project.info.tech.join(", "))
        
        $(".typeInput").text(project.type)
        $(".dateInput").text(project.info.date)

        if (project.link){
            $(".viewProject").attr("href",project.link)
        }else{
            $(".viewProject").hide()
        }
        if(project.github){
            $(".viewGithub").attr("href",project.github)
        }else{
            $(".viewGithub").hide()
        }

        $(".modal").modal()
    })
})
var page = {
    animating: false,
    slideNumber: 1
}
var projects = {
    codePenguin: {
        name: "Code Penguin",
        github: "https://github.com/cefimenda/code-penguin",
        imageRef: "assets/images/code-penguin.png",
        type: "Full-Stack",
        info:{
            short:"Ecosystem where coders help coders",
            detail:"Code-Penguin is a decentralized and distributed closed economy built on holochain, where coders can either create tasks for others to solve or complete existing tasks in exchange for tokens called pebbles.",
            tech:["Holochain"],
            date:"Dec 2018"
        }
    },
    courier: {
        name: "Courier",
        github: "https://github.com/daleP1988/courier",
        link: "https://courier-heroku-app.herokuapp.com/",
        imageRef: "assets/images/courier.jpg",
        type: "Full-Stack",
        info: {
            short: "Bulk Email Sender",
            detail: "Courier utilizes google scripts to allow users to send bulk emails that will never be considered spam or promotion and will always fall into the recepient's mailbox straightaway!",
            tech: ["GSheets", "GScripts","Express"],
            date: "Oct 2018"
        }
    },
    projections: {
        name: "Projections Builder",
        link: "https://docs.google.com/spreadsheets/d/1Xjq8KEABuv9WVhshuWG8TGJLglfgXg9oJEJV_Q-548M/edit?usp=sharing",
        imageRef: "assets/images/Projections.png",
        type: "Tools",
        info:{
            short:"Financial Projection Builder for Startups",
            detail:"A Financial Projections Model that takes in an astounding number of assumptions in order to construct a detailed financial projections for your startup, enabling scenario analysis and financial planning.",
            tech:["GScripts","GSheets"],
            date:"2017-2018"
        }
    },
    liri: {
        name: "LIRI",
        github: "https://github.com/cefimenda/liri-node-app",
        imageRef: "assets/images/liri.png",
        type: "Tools",
        info:{
            short:"Language Interpretation and Recognition Interface",
            detail:"LIRI is a back end only tool built for a Columbia University Bootcamp Homework. Utilizing a variety of APIs, LIRI can search Youtube, Spotify or a movie database for keywords provided by the user and return relevant information.",
            tech:["OMDB API","Youtube API","Spotify API","Node Inquirer","Node"],
            date:"Sep 2018"
        }
    },
    vamoose: {
        name: "Vamoose",
        link: "https://www.vamoose.it",
        imageRef: "assets/images/vamoose.jpg",
        type: "Startups",
        info:{
            short:"Mobile POS System",
            detail:"Vamoose is a mobile POS system that enables it's users to be their own cashiers and therefore skip the lines and enjoy the in-store experience restaurants has to offer. At it's peak, Vamoose was active at more then 100 restaurants in NYC and received a $6M VC valuation.",
            tech:["CEO","Founder"],
            date:"2016-2018"
        }
    },
    sapposhop: {
        name: "SappoShop",
        link: "https://www.sapposhop.com",
        imageRef: "assets/images/Sapposhop.jpg",
        type: "Startups",
        info:{
            short:"Second Hand Furniture Marketplace",
            detail:"SappoShop is a Boston based secondhand furniture marketplace that purchases high quality furniture from customers that are moving out and sells them to the local population.",
            tech:["Co-Founder"],
            date:"2016-2017"
        }
    },
    auditionScavenger: {
        name: "Audition Scavenger",
        link: "http://www.scavenger.xyz",
        github: "https://github.com/cefimenda/scraper",
        imageRef: "assets/images/scavenger.png",
        type: "Full-Stack",
        info:{
            short:"Web Scraper for the Artist Community",
            detail:"Scavenger scrapes two of the most popular websites in the artist community to display a collection of Auditions that can be tailored to fit the users profile.",
            tech:["MongoDB/Mongoose","Axios","Bootstrap","Express"],
            date:"2018 - 2019"
        }
    },
    PLUR: {
        name: "PLUR",
        link: "https://sandynism.github.io/PLUR/",
        github: "https://github.com/Sandynism/PLUR",
        imageRef: "assets/images/PLUR.jpg",
        type: "Tools",
        info:{
            short:"EDM Finder that Helps You Plan for the Party",
            detail:"PLUR is a frontend only web app that finds EDMs based on location and dates, and shows you weather information and food availability around the location during the dates of the event.",
            tech:["Passport","Weather API","Yelp API","Google Maps API"],
            date:"Sep 2018"
        }
    },
    helpFinder: {
        name: "Help Finder",
        link: "https://help-finder.herokuapp.com/",
        github: "https://github.com/cefimenda/help-finder",
        imageRef: "assets/images/helpFinder.png",
        type: "Websites"
    },
    giphySearch: {
        name: "Giphy Search",
        github: "https://github.com/cefimenda/Giphy",
        link: "https://cefimenda.github.io/giphy/",
        imageRef: "assets/images/giphy.png",
        type: "Websites"
    },
    RPS: {
        name: "RPS - Multiplayer",
        github: "https://github.com/cefimenda/RPS-Multiplayer/",
        link: "https://cefimenda.github.io/RPS-Multiplayer/",
        imageRef: "assets/images/RPS.png",
        type: "Games",
        info:{
            short:"Online Multiplayer Rock Paper Scissors",
            detail:"This Rock Paper Scissors game was made for a homework assignment at the Columbia University Bootcamp. It is the classical game of Rock Paper Scissors that can be played online with other people thanks to the usage of websockets.",
            tech:["Google Firebase","Web Sockets"],
            date:"Aug 2018"
        }
    },
    RPG: {
        name: "RPG Game",
        github: "https://github.com/cefimenda/unit-4-game",
        link: "https://cefimenda.github.io/unit-4-game/",
        imageRef: "assets/images/rpgGame.png",
        type: "Games",
        info:{
            short:"Simple Role Playing Game",
            detail:"This is a simple Role Playing Game built for the Columbia University Bootcamp where users can fight different opponents to improve their character and proceed to the next level. You need to choose your opponents wisely and pay attention to your stamina bar to be able to go the distance!",
            tech:["HTML","CSS","Javascript","JQuery"],
            date:"Jul 2018"
        }
    },
    triviaGame: {
        name: "Trivia Game",
        github: "https://github.com/cefimenda/TriviaGame",
        link: "https://cefimenda.github.io/TriviaGame/",
        imageRef: "assets/images/triviaGame.png",
        type: "Games",
        info:{
            short:"Multiple Choice Trivia with Categories",
            detail:"This is a multiple choice trivia game built for the Columbia University Bootcamp, where players can select any category and difficulty to challenge themselves and beat their best score!",
            tech:["Open Trivia Database","HTML","CSS","Javascript","JQuery","Bootstrap"],
            date:"Jul 2018"
        }
    },
    hangman: {
        name: "World Cup Hangman",
        github: "https://github.com/cefimenda/World-Cup-Hangman",
        link: "https://cefimenda.github.io/World-Cup-Hangman/",
        imageRef: "assets/images/hangman.png",
        type: "Games",
        info:{
            short:"FIFA World Cup Themed Hangman Game",
            detail:"This is a Hangman Game built for the Columbia University Bootcamp, where players attempt to collect a minimum of 11 player cards in order to win the world cup. Players can change the settings to adjust the games difficulty according to their preference.",
            tech:["HTML","CSS","Javascript","JQuery"],
            date:"Jun 2018"
        }
    },
}

function createProjectCards(type) {
    var targetRow = $(".projectsDisplay")
    targetRow.fadeOut()
    targetRow.empty()
    setTimeout(function () {
        for (var id in projects) {
            if (projects[id].type == type) {
                var col = $("<div>").addClass("col-lg-4 col-md-6 col-12 mb-3")
                col.css({
                    "width": "18rem",
                    "height": "250.172px",
                    "max-width": "18rem",
                    "max-height": "250.172px"
                })
                targetRow.append(col)
                var card = $("<div>").addClass("card shadow text-center")

                col.append(card)
                var img = $("<img>").addClass("card-img-top")
                img.attr("src", projects[id].imageRef)
                img.css({
                    "height": "150.172px"
                })
                card.append(img)
                var body = $("<div>").addClass("card-body")
                card.append(body)
                var title = $("<h5>").addClass("card-title")
                body.append(title)

                var link = $("<a>").attr("href", projects[id].link)
                link.addClass("project-title")
                link.attr("target", "_blank")
                link.text(projects[id].name)
                title.append(link)

                if (projects[id].link && projects[id].github) {
                    var symbolRow = $("<div>").addClass("row symbolRow px-3")
                    card.append(symbolRow)

                    var infoCol = $("<div>").addClass("col-4 border-right")
                    symbolRow.append(infoCol)
                    var viewCol = $("<div>").addClass("col-4 border-right")
                    symbolRow.append(viewCol)
                    var gitCol = $("<div>").addClass("col-4")
                    symbolRow.append(gitCol)

                    var viewAnc = $("<a>").attr("href", projects[id].link)
                    viewAnc.attr("target", "_blank")
                    viewCol.append(viewAnc)
                    var viewImg = $("<i>").addClass("fas fa-eye fa-lg")
                    viewAnc.append(viewImg)

                    var gitAnc = $("<a>").attr("href", projects[id].github)
                    gitAnc.attr("target", "_blank")
                    gitCol.append(gitAnc)
                    var gitImg = $("<i>").addClass("fab fa-github fa-lg")
                    gitAnc.append(gitImg)

                    var infoAnc = $("<a>")
                        .attr("data", JSON.stringify(projects[id]))
                        .addClass("justify-content-center info fakeLink")
                    infoCol.append(infoAnc)
                    var infoImg = $("<i>").addClass("fas fa-info-circle fa-lg")
                    infoAnc.append(infoImg)

                }
                else if (projects[id].link) {
                    var symbolRow = $("<div>").addClass("row symbolRow px-3")
                    card.append(symbolRow)

                    var infoCol = $("<div>").addClass("col-6 border-right")
                    symbolRow.append(infoCol)
                    var viewCol = $("<div>").addClass("col-6")
                    symbolRow.append(viewCol)

                    var viewAnc = $("<a>").attr("href", projects[id].link)
                    viewAnc.attr("target", "_blank")
                    viewCol.append(viewAnc)
                    var viewImg = $("<i>").addClass("fas fa-eye fa-lg")
                    viewAnc.append(viewImg)

                    var infoAnc = $("<a>")
                        .attr("data", JSON.stringify(projects[id]))
                        .addClass("justify-content-center info fakeLink")
                    infoCol.append(infoAnc)
                    var infoImg = $("<i>").addClass("fas fa-info-circle fa-lg")
                    infoAnc.append(infoImg)
                }
                else if (projects[id].github) {
                    var symbolRow = $("<div>").addClass("row symbolRow px-3")
                    card.append(symbolRow)

                    var infoCol = $("<div>").addClass("col-6 border-right")
                    symbolRow.append(infoCol)
                    var gitCol = $("<div>").addClass("col-6")
                    symbolRow.append(gitCol)

                    var gitAnc = $("<a>").attr("href", projects[id].github)
                    gitAnc.attr("target", "_blank")
                    gitCol.append(gitAnc)
                    var gitImg = $("<i>").addClass("fab fa-github fa-lg")
                    gitAnc.append(gitImg)

                    var infoAnc = $("<a>")
                        .attr("data", JSON.stringify(projects[id]))
                        .addClass("justify-content-center info fakeLink")
                    infoCol.append(infoAnc)
                    var infoImg = $("<i>").addClass("fas fa-info-circle fa-lg")
                    infoAnc.append(infoImg)
                }
            }
        }
        targetRow.fadeIn()
    }, 500)


}
var slideInterval;
let sliderBegin = () => {
    var slide = $("#macbookSlide")
    slideInterval = setInterval(function () {
        slide.fadeOut();
        setTimeout(slideChange, 400, slide)
    }, 4000)
}

let slideChange = (slide) => {
    var key = Object.keys(projects)[page.slideNumber]
    var project = projects[key]
    if (!project) {
        page.slideNumber = 0
        slideChange(slide)
        return
    }
    if (page.slideNumber >= Object.keys(projects).length) {
        page.slideNumber = 0
        slideChange(slide)
        return
    }
    if (project.type === "Startups" || project.type === "Full-Stack") {
        slide.attr("src", projects[key].imageRef)
        setTimeout(function () { slide.fadeIn() }, 300)
        page.slideNumber++
        return
    } else {
        page.slideNumber++
        slideChange(slide)
        return
    }
}