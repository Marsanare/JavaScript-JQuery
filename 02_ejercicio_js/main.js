$("document").ready(function(){
    $("#mensaje_img1").hide()
});

$("#imagen1").hover(function(){
    $("#mensaje_img1").show()
    console.log("Se muestra la descripción");
}, function(){
    $("#mensaje_img1").hide()
    console.log("Se oculta la descripción");
});