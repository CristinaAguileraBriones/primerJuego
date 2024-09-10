    //NODOS 
    //Pantallas
    //Pantalla de Inicio
    const pantallaTituloJuegoNode = document.querySelector("#contenedor-principal")
    //Pantalla de juego en acción
    const contenedorJuegoNode = document.querySelector("#contenedor-juego")
    const pantallaJuegoNode = document.querySelector("#pantalla-juego")
    //Pantalla final
    const pantallaFinalNode = document.querySelector("#cartel-resultado")

    //botones
    const botonStartNode = document.querySelector("#contenedor-principal button")
    const botonRestartNode = document.querySelector("#cartel-resultado button")
    
    
    
    // Objetos del juego

        let espe 
        let arrayAbuelos = []
        let arrayGuardiaCivil = []
        let frecuenciaAbuelos = 1500
        let frecuenciaGuardias = 2000
    


    //FUNCIONES GENERALES

    function comenzarJuego(){
        
        pantallaTituloJuegoNode.style.display = "none"
        contenedorJuegoNode.style.display = "flex"

        espe = new Espe()
        
        
       

        setInterval(() => {

            bucleJuego()
            
        }, 1000/60);

        setInterval(()=>{

            anadirAbuelos()
            
           
        }, frecuenciaAbuelos)
        setInterval(()=>{

            anadirGuardias()
        }, frecuenciaGuardias)


    }

    function bucleJuego (){

        arrayAbuelos.forEach(cadaAbuelo =>{

            cadaAbuelo.movimientoContinuo()
        })

        arrayGuardiaCivil.forEach(cadaGuardia =>{

            cadaGuardia.movimientoContinuoG()
        })
        eliminarAbuelosFueraDePantalla()
        eliminarGuardiasFueraDePantalla()
    }

    function anadirAbuelos () {

        let abueloAnadido = new Abuelo ()
        arrayAbuelos.push(abueloAnadido)
        
    }

    function anadirGuardias () {

        let guardiaAnadido = new GuardiaCivil ()
        arrayGuardiaCivil.push(guardiaAnadido)
        
    }

    function eliminarAbuelosFueraDePantalla (){

        if(arrayAbuelos.length===0){

            return
        }

        if(arrayAbuelos[0].x + arrayAbuelos[0].w <= 0){
            arrayAbuelos[0].abueloNode.remove()
            arrayAbuelos.shift()
            
        }
    }

    function eliminarGuardiasFueraDePantalla(){

        if(arrayGuardiaCivil.length===0){

            return
        }

        if(arrayGuardiaCivil[0].x + arrayGuardiaCivil[0].w <= 0){
            arrayGuardiaCivil[0].guardiaNode.remove()
            arrayGuardiaCivil.shift()
            
        }
    }

    //LISTENERS

    botonStartNode.addEventListener("click", comenzarJuego)

    const eventoMovimiento = document.addEventListener("keydown", function(event) {
        // verificar qué tecla fue presionada //function event es algo interno del programa
        if (event.key === "ArrowUp") {
            console.log("arriba")
            espe.arribaPad();  // Mover abajo si se presiona la flecha izquierda
        } else if (event.key === "ArrowDown") {
            console.log("abajo")
            espe.abajoPad();    // Mover arriba si se presiona la flecha derecha
        }
    
    })




















