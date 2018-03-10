
$("#elem1").hover(function(){
    $("img").attr("src","img/arbol.jpg");
    $("#elem1").addClass("destacar");
    console.log("Muestro árbol");
}, function(){
    $("img").attr("src","img/blanco.jpg");
    $("#elem1").removeClass("destacar");
    console.log("Oculto árbol");
});

$("#elem2").hover(function(){
    $("img").attr("src","img/lago.jpg");
    $("#elem2").addClass("destacar");
    console.log("Muestro lago");
}, function(){
    $("img").attr("src","img/blanco.jpg");
    $("#elem2").removeClass("destacar");
    console.log("Oculto lago");
});

$("#elem3").hover(function(){
    $("img").attr("src","img/rio.jpg");
    $("#elem3").addClass("destacar");
    console.log("Muestro río");
}, function(){
    $("img").attr("src","img/blanco.jpg");
    $("#elem3").removeClass("destacar");
    console.log("Oculto río");
});

$("#elem4").hover(function(){
    $("img").attr("src","img/sol.jpg");
    $("#elem4").addClass("destacar");
    console.log("Muestro sol");
}, function(){
    $("img").attr("src","img/blanco.jpg");
    $("#elem4").removeClass("destacar");
    console.log("Oculto sol");
});

