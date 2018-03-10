$("#img1").on("mouseover", function(){
    $("img").attr("src")
    $("img").attr("src","img/rio.jpg")
    console.log("Árbol cambia a río");
});

$("#img1").on("mouseout", function(){
    $("img").attr("src")
    $("img").attr("src","img/arbol.jpg")
    console.log("Río cambia a árbol");
});