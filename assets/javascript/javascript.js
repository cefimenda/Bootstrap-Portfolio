$(function () {
    $(".carousel").carousel({
        interval: false
    })
    $(".portfolioLearnMore").click(function () {
        $(".myPortfolio").show()
        $(".aboutMe").hide()
        $(".contactMe").hide()
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
    $(".nav-link.bg-blue").click(function () {
        if (!page.animating) {
            page.animating=true
            var pillsList = $(".pills")
            for (var i =0;i<pillsList.length;i++){
                $(pillsList[i]).removeClass("active")
            }
            $(this).addClass('active')
            //disable scrolling when animation starts
            $(".projectsRow").css({
                'overflow-x': 'hidden'
            })
            var cover = $(".cover")

            cover.animate({
                width: "100%",
                padding: "100%"
            }, 1500, "swing")
            var target = $(this).text().trim().split(" ")[0].toLowerCase().trim()
            setTimeout(function () {
                createProjectCards(target)
            }, 700)

            $(".cover").animate({
                width: "0%",
                padding: "1px"
            }, 1500, "swing")
            //enable scrolling when animation ends
            setTimeout(function () {
                $(".projectsRow").css({
                    'overflow-x': 'scroll'
                })
                page.animating=false
            }, 3000)
        }
    })
})
var page = {
    animating: false
}
var projects = {
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
    PLUR: {
        name: "PLUR",
        link: "https://sandynism.github.io/PLUR/",
        imageRef: "assets/images/PLUR.png",
        type: "websites"
    },
    auditionScavenger: {
        name: "Audition Scavenger",
        link: "https://www.scavenger.xyz",
        imageRef: "assets/images/scavenger.png",
        type: "websites"
    },
    giphySearch: {
        name: "Giphy Search",
        link: "https://cefimenda.github.io/giphy/",
        imageRef: "assets/images/giphy.png",
        type: "websites"
    },
    RPS: {
        name: "RPS - Multiplayer",
        link: "https://cefimenda.github.io/RPS-Multiplayer/",
        imageRef: "assets/images/RPS.png",
        type: "games"
    },
    RPG: {
        name: "RPG Game",
        link: "https://cefimenda.github.io/unit-4-game/",
        imageRef: "assets/images/rpgGame.png",
        type: "games"
    },
    triviaGame: {
        name: "Trivia Game",
        link: "https://cefimenda.github.io/TriviaGame/",
        imageRef: "assets/images/triviaGame.png",
        type: "games"
    },
    hangman: {
        name: "World Cup Hangman",
        link: "https://cefimenda.github.io/World-Cup-Hangman/",
        imageRef: "assets/images/hangman.png",
        type: "games"
    },
}

function createProjectCards(type) {
    $(".startupsDump").empty()
    $(".websitesDump").empty()
    $(".gamesDump").empty()
    $(".projectsDump").empty()
    for (var id in projects) {
        if (projects[id].type == type) {
            var targetRow = $(".projectsDump")
            var col = $("<div>").addClass("mb-3 mt-3 mx-4 p-0")
            targetRow.append(col)
            var card = $("<div>").addClass("card shadow text-center mr-3")
            card.css({ "width": "18rem" })
            col.append(card)
            var img = $("<img>").addClass("card-img-top")
            img.attr("src", projects[id].imageRef)
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
        }
    }
}
