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
        <img id="macbookSlide" src="assets/images/code-penguin.png"></div></div><div class="col-12 col-lg-6"><h1 class="mx-auto display-4 display-4-sm mt-lg-5 text-center">Select a category to view projects!</h1></div>`);
        
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
        var target = $(this).text().trim().split(" ")[0].toLowerCase().trim();
        clearInterval(slideInterval)
        createProjectCards(target);
        var pillsList = $(".pillButton")
        for (var i = 0; i < pillsList.length; i++) {
            $(pillsList[i]).removeClass("activePill")
        }
        $(this).addClass('activePill')

    })
    $("#swipe").swipe({
        allowPageScroll: "horizontal"
    });
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
        type: "full-stack"
    },
    courier: {
        name: "Courier",
        github: "https://github.com/daleP1988/courier",
        link: "https://courier-heroku-app.herokuapp.com/",
        imageRef: "assets/images/courier.png",
        type: "full-stack"
    },
    projections: {
        name: "Projections Builder",
        link: "https://docs.google.com/spreadsheets/d/1Xjq8KEABuv9WVhshuWG8TGJLglfgXg9oJEJV_Q-548M/edit?usp=sharing",
        imageRef: "assets/images/Projections.png",
        type: "tools"
    },
    liri: {
        name: "LIRI",
        github: "https://github.com/cefimenda/liri-node-app",
        imageRef: "assets/images/liri.png",
        type: "tools"
    },
    vamoose: {
        name: "Vamoose",
        link: "https://www.vamoose.it",
        imageRef: "assets/images/vamoose.png",
        type: "startups"
    },
    sapposhop: {
        name: "SappoShop",
        link: "https://www.sapposhop.com",
        imageRef: "assets/images/Sapposhop.png",
        type: "startups"
    },
    auditionScavenger: {
        name: "Audition Scavenger",
        link: "https://www.scavenger.xyz",
        github: "https://github.com/cefimenda/scraper",
        imageRef: "assets/images/scavenger.png",
        type: "full-stack"
    },
    PLUR: {
        name: "PLUR",
        link: "https://sandynism.github.io/PLUR/",
        github: "https://github.com/Sandynism/PLUR",
        imageRef: "assets/images/PLUR.png",
        type: "full-stack"
    },
    helpFinder: {
        name: "Help Finder",
        link: "https://help-finder.herokuapp.com/",
        github: "https://github.com/cefimenda/help-finder",
        imageRef: "assets/images/helpFinder.png",
        type: "websites"
    },
    giphySearch: {
        name: "Giphy Search",
        github: "https://github.com/cefimenda/Giphy",
        link: "https://cefimenda.github.io/giphy/",
        imageRef: "assets/images/giphy.png",
        type: "websites"
    },
    RPS: {
        name: "RPS - Multiplayer",
        github: "https://github.com/cefimenda/RPS-Multiplayer/",
        link: "https://cefimenda.github.io/RPS-Multiplayer/",
        imageRef: "assets/images/RPS.png",
        type: "games"
    },
    RPG: {
        name: "RPG Game",
        github: "https://github.com/cefimenda/unit-4-game",
        link: "https://cefimenda.github.io/unit-4-game/",
        imageRef: "assets/images/rpgGame.png",
        type: "games"
    },
    triviaGame: {
        name: "Trivia Game",
        github: "https://github.com/cefimenda/TriviaGame",
        link: "https://cefimenda.github.io/TriviaGame/",
        imageRef: "assets/images/triviaGame.png",
        type: "games"
    },
    hangman: {
        name: "World Cup Hangman",
        github: "https://github.com/cefimenda/World-Cup-Hangman",
        link: "https://cefimenda.github.io/World-Cup-Hangman/",
        imageRef: "assets/images/hangman.png",
        type: "games"
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
                    var symbolRow = $("<div>").addClass("row")
                    card.append(symbolRow)

                    var viewCol = $("<div>").addClass("col-6 pl-5 border-right")
                    symbolRow.append(viewCol)
                    var gitCol = $("<div>").addClass("col-6 pr-5")
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
                }
                else if (projects[id].link) {
                    var symbolRow = $("<div>").addClass("row")
                    card.append(symbolRow)

                    var viewCol = $("<div>").addClass("col-12")
                    symbolRow.append(viewCol)

                    var viewAnc = $("<a>").attr("href", projects[id].link)
                    viewAnc.attr("target", "_blank")
                    viewCol.append(viewAnc)
                    var viewImg = $("<i>").addClass("fas fa-eye fa-lg")
                    viewAnc.append(viewImg)
                }
                else if (projects[id].github) {
                    var symbolRow = $("<div>").addClass("row")
                    card.append(symbolRow)

                    var gitCol = $("<div>").addClass("col-12")
                    symbolRow.append(gitCol)

                    var gitAnc = $("<a>").attr("href", projects[id].github)
                    gitAnc.attr("target", "_blank")
                    gitCol.append(gitAnc)
                    var gitImg = $("<i>").addClass("fab fa-github fa-lg")
                    gitAnc.append(gitImg)
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
    if (project.type === "startups" || project.type === "full-stack") {
        slide.attr("src", projects[key].imageRef)
        setTimeout(function(){slide.fadeIn()},300)
        page.slideNumber++
        return
    } else {
        page.slideNumber++
        slideChange(slide)
        return
    }
}