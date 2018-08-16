$(document).ready(function () {
    var $form = $('form');
    $form.submit(function () {
        $.post($(this).attr('action'), $(this).serialize(), function (response) {
            var alert = $("<div>").addClass("alert alert-success")
            alert.attr("role", "alert")
            alert.text("Thank you for your message, I will get back to you shortly!")
            var exit = $("<button>").addClass("close")
            exit.attr("data-dismiss", "alert")
            exit.attr("aria-label", "Close")
            alert.append(exit)
            var symbol = $("<span>").attr("aria-hidden", "true")
            symbol.html("&times;")
            exit.append(symbol)
            $(".alertSection").append(alert)
        }, 'json');
        return false;
    });
});