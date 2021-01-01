$("#about").on("click", function() {
    if($("#about").hasClass("active")) {
        return;
    }
    $("#members").removeClass("active");
    $("#albums").removeClass("active");
    $("#about").addClass("active");
    $("#memberSection").css("display", "none");
    $("#albumSection").css("display", "none");
    $("#aboutSection").css("display", "block");
})

$("#members").on("click", function() {
    if($("#members").hasClass("active")) {
        return;
    }
    $("#about").removeClass("active");
    $("#albums").removeClass("active");
    $("#members").addClass("active");
    $("#aboutSection").css("display", "none");
    $("#albumSection").css("display", "none");
    $("#memberSection").css("display", "block");
})

$("#albums").on("click", function() {
    if($("#albums").hasClass("active")) {
        return;
    }
    $("#about").removeClass("active");
    $("#members").removeClass("active");
    $("#albums").addClass("active");
    $("#aboutSection").css("display", "none");
    $("#memberSection").css("display", "none");
    $("#albumSection").css("display", "block");
})
