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

        let espe = null
        let arrayAbuelos = []
        let arrayGuardiaCivil = []
        let frecuenciaAbuelos = 2000
        let frecuenciaGuardias = 3500
        let intervaloJuego = null
        let intervaloAbuelos = null
        let intervaloGuardias = null
        let numColisionesAbuelos = 0
    

    //FUNCIONES GENERALES

    function comenzarJuego(){
        
        pantallaTituloJuegoNode.style.display = "none"
        contenedorJuegoNode.style.display = "flex"

        espe = new Espe()
        
        
       

       intervaloJuego = setInterval(() => {

            bucleJuego()
            
        }, 1000/60);


        intervaloAbuelos = setInterval(()=>{

            anadirAbuelos()
            
           
        }, frecuenciaAbuelos)

      intervaloGuardias =  setInterval(()=>{     
                
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
        detectarColisionesAbuelos()
    }

    function anadirAbuelos () {
        let abuelosAleatorios = Math.floor(Math.random()* (window.innerHeight - 50))
        
        let abueloAnadido = new Abuelo (abuelosAleatorios)
        arrayAbuelos.push(abueloAnadido)
        //desfase de tiempo para que no salgan a la vez
        setTimeout(()=>{
        let abuelosAleatorios2 = Math.floor(Math.random()* (window.innerHeight - 50))
        let abueloAnadido2 = new Abuelo (abuelosAleatorios2)
        arrayAbuelos.push(abueloAnadido2) 

        }, 1000)
               
    }

    function anadirGuardias () {

        let guardiasAleatorios = Math.floor(Math.random()* (window.innerHeight - 50))
        
        let guardiaAnadido = new GuardiaCivil (guardiasAleatorios)
        arrayGuardiaCivil.push(guardiaAnadido)

        setTimeout(()=>{

            let guardiasAleatorios = Math.floor(Math.random()* (window.innerHeight - 50))
            let guardiaAnadido = new GuardiaCivil (guardiasAleatorios)
            arrayGuardiaCivil.push(guardiaAnadido)
    
            }, 1000)

        
        
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

    function detectarColisionesAbuelos () {

        for (let i = arrayAbuelos.length - 1; i >= 0; i--) {
            let cadaAbuelo = arrayAbuelos[i];
    
            if (
                espe.x < cadaAbuelo.x + cadaAbuelo.w &&
                espe.x + espe.w > cadaAbuelo.x &&
                espe.y < cadaAbuelo.y + cadaAbuelo.h &&
                espe.y + espe.h > cadaAbuelo.y
            ) {
                numColisionesAbuelos++;
    
                cadaAbuelo.abueloNode.remove();
    
                arrayAbuelos.splice(i, 1);
    
                if (numColisionesAbuelos >= 3) {
                    gameOverTresAbuelos();
                }
            }
        }
    }
       

    function gameOverTresAbuelos (){

        //limpieza de elementos
        clearInterval(intervaloJuego)
        clearInterval(intervaloAbuelos)
        clearInterval(intervaloGuardias)
        espe = null
        arrayAbuelos = []
        arrayGuardiaCivil = []
        pantallaJuegoNode.classList.add("pausa")
        pantallaJuegoNode = ""
        contenedorJuegoNode=""

        contenedorJuegoNode.style.display = "none"
        pantallaFinalNode.style.display = "flex"

    }

    //LISTENERS

    botonStartNode.addEventListener("click", comenzarJuego)

    const eventoMovimiento = document.addEventListener("keydown", function(event) {
        // verificar qué tecla fue presionada //function event es algo interno del programa
        if (event.key === "ArrowUp") {
            
            espe.arribaPad();  // Mover abajo si se presiona la flecha izquierda
        } else if (event.key === "ArrowDown") {
            
            espe.abajoPad();    // Mover arriba si se presiona la flecha derecha
        }else if (event.key === "ArrowRight"){
            console.log("atrás")
            espe.atrasPad()
        }else if (event.key=== "ArrowLeft"){
            console.log("delante")
            espe.acelerarPad()
        }
    
    })




















