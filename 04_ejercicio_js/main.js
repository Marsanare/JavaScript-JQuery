
$("document").ready(function(){
    $("#anuncio").height(500).width(500).text("¡CLICK! para cambiar de color")
    .hide().fadeIn(3000)
});

$("#anuncio").on("click", function () {
    let colores = ["blue", "yellow", "red", "grey", "green", "orange", "purple"];
    let color = colores [Math.floor(Math.random() * colores.length)];
    console.log(color);
    $("#anuncio").css("background-color",color);

});

