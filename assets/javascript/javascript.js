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
            page.animating = true
            $(".scrollRightInfo").fadeOut()
            var pillsList = $(".pills")
            for (var i = 0; i < pillsList.length; i++) {
                $(pillsList[i]).removeClass("active")
            }
            $(this).addClass('active')
            //disable scrolling when animation starts
            $(".projectsRow").css({
                'overflow-x': 'hidden'
            })

            var cover = $(".cover")
            $(".projectsRow")[0].scroll({
                left: 0,
                behavior: "smooth"
            })
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
                console.log($(".projectsDump").css('width'))
                console.log($(".projectsRow").css('width'))
                if (Number($(".projectsDump").css('width').split("px")[0]) >= Number($(".projectsRow").css('width').split("px")[0])) {
                    $(".scrollRightInfo").fadeIn()
                }
                page.animating = false
            }, 3000)
        }
    })
    $("#swipe").swipe({
        allowPageScroll: "horizontal"
    });
})
var page = {
    animating: false
}
var projects = {

    projections:{
        name:"Projections Builder",
        link:"https://docs.google.com/spreadsheets/d/1Xjq8KEABuv9WVhshuWG8TGJLglfgXg9oJEJV_Q-548M/edit?usp=sharing",
        imageRef:"assets/images/Projections.png",
        type:"tools"
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
    PLUR: {
        name: "PLUR",
        link: "https://sandynism.github.io/PLUR/",
        github: "https://github.com/Sandynism/PLUR",
        imageRef: "assets/images/PLUR.png",
        type: "websites"
    },
    auditionScavenger: {
        name: "Audition Scavenger",
        link: "https://www.scavenger.xyz",
        imageRef: "assets/images/scavenger.png",
        type: "websites"
    },
    helpFinder:{
        name:"Help Finder",
        link:"https://help-finder.herokuapp.com/",
        github:"https://github.com/cefimenda/help-finder",
        imageRef:"assets/images/helpFinder.png",
        type:"websites"
    },
    // giphySearch: {
    //     name: "Giphy Search",
    //     github: "https://github.com/cefimenda/Giphy",
    //     link: "https://cefimenda.github.io/giphy/",
    //     imageRef: "assets/images/giphy.png",
    //     type: "websites"
    // },
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
            card.css({
                "width": "18rem",
                "height": "250.172px"
            })
            col.append(card)
            var img = $("<img>").addClass("card-img-top")
            img.attr("src", projects[id].imageRef)
            img.css({
                "height":"150.172px"
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
}
