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
    $(".navbarAbout").click(function(){
        $(".aboutMeLearnMore").click()
    })
    $(".navbarPortfolio").click(function(){
        $(".portfolioLearnMore").click()
    })    
    $(".navbarContact").click(function(){
        $(".contactMeLearnMore").click()
    })
    $(".learnMoreButtons").click(function(){
        setTimeout(function(){
            window.scroll({
                top:400,
                behavior:'smooth'
            })
        },100)
    })
})

