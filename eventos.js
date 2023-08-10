const button = document.getElementById("boton");
button.addEventListener("click", function(evento){
    alert("hola!");
    evento.stopPropagation();

});



const div = document.getElementById("myDiv");
div.addEventListener("click", function(){
    alert("Hola! soy el div")
});
