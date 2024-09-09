const divPortadaTituloNode = document.querySelector("#portada-titulo")
const divContenedorStartNode = document.querySelector("#contenedor-start")
const buttonStart = document.querySelector("#contenedor-start button")
const divImagenNodo = document.querySelector("#instrucciones")
const imageNodo = document.querySelector("#instrucciones img")

//ESTILOS PORTADA

//Titulo

divPortadaTituloNode.style.display="flex"
divPortadaTituloNode.style.height="100vh"
divPortadaTituloNode.style.width="100%"

//Botón

buttonStart.style.marginLeft="580px"
buttonStart.style.marginTop="30px"
buttonStart.style.marginBottom="30px"
buttonStart.style.height="130px"
buttonStart.style.width="130px"
buttonStart.style.borderRadius="80px"

//LISTENER BOTÓON START

buttonStart.addEventListener("click",()=>{

    window.location.href="./index2.html"


})

// Contenedor imagen


//Imagen

imageNodo.style.position="absolute"
imageNodo.style.marginLeft="530px"
imageNodo.style.marginTop="30px"
imageNodo.style.height="200px"
imageNodo.style.width="250px"



