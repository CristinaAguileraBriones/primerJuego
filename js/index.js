    //NODOS 
    //Pantallas
    //Pantalla de Inicio
    const pantallaTituloJuegoNode = document.querySelector("#contenedor-principal")
    const pantallaContenedorStartNode = document.querySelector("#contenedor-start")
    const pantallaInstruccionesNode = document.querySelector("#instrucciones")
    //Pantalla de juego en acción
    const contenedorJuegoNode = document.querySelector("#contenedor-juego")
    const pantallaJuegoNode = document.querySelector("#pantalla-juego")
    //Pantalla final
    const pantallaFinalNode = document.querySelector("#cartel-resultado")

    //botones
    const botonStartNode = document.querySelector("#contenedor-start button")
    const botonRestartNode = document.querySelector("#cartel-resultado button")
    
    
    
    // Objetos del juego
  


    //FUNCIONES GENERALES

    function comenzarJuego(){
        
        pantallaTituloJuegoNode.style.display = "none"
        contenedorJuegoNode.style.display = "flex"
        pantallaJuegoNode.style.display = "flex"

        setInterval(() => {
       
        }, 1000/60);


    }

    //LISTENERS

    botonStartNode.addEventListener("click", comenzarJuego)




















