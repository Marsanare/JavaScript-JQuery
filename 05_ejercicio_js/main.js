$("document").ready(function(){
    $("#carrete").hide()
});

$("html").on("click", function(){
    $("#carrete").show()
    $("h1").hide()
});

$("img").on("mouseover", function(){
    $(this).css("width", "300px")
    console.log("El ancho aumenta")
});

$("img").on("mouseout", function(){
    $(this).css("width", "250px")
    console.log("El ancho disminuye")
});