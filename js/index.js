    //NODOS 
    //Pantallas
    //Pantalla de Inicio
    const pantallaTituloJuegoNode = document.querySelector("#contenedor-principal")
    //Pantalla de juego en acción
    const contenedorJuegoNode = document.querySelector("#contenedor-juego")
    const pantallaJuegoNode = document.querySelector("#pantalla-juego")
    //Pantalla final
    const pantallaFinalNode = document.querySelector("#cartel-resultado")
    const pantallaFinal2Node = document.querySelector("#cartel-resultado2")
    //botones
    const botonStartNode = document.querySelector("#contenedor-principal button")
    const botonRestartNode = document.querySelector("#cartel-resultado button")
    const botonRestart2Node = document.querySelector("#cartel-resultado2 button")
    
    //vidas
    const vidaUnoNode = document.querySelector("#contenedor-juego .vida1")
    const vidaDosNode = document.querySelector("#contenedor-juego .vida2")
    const vidaTresNode = document.querySelector("#contenedor-juego .vida3")
    
    
    
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

    // Audios
        const audio = new Audio('./img/fragmento-himno.mp3')
        const audioPrincipio = new Audio("./img/musica-principio.mp3")
        const hablaEsperanzaTecla = new Audio ("./img/espe-no-estuvimos.mp3")
        const muerteAyuso = new Audio ("./img/muerte-viejos.mp3")
        const guardiaPillado = new Audio ("./img/guardia-pillado.mp3")
        
    

    //FUNCIONES GENERALES

    function comenzarJuego(){

        clearInterval(intervaloJuego)
        clearInterval(intervaloAbuelos)
        clearInterval(intervaloGuardias)
        pantallaFinalNode.style.display = "none"
        pantallaFinal2Node.style.display = "none"
        pantallaTituloJuegoNode.style.display = "none"
        contenedorJuegoNode.style.display = "flex"


        espe = new Espe()
        audio.play()
        muerteAyuso.pause()
        guardiaPillado.pause()
       
        
        
       

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
        detectarColisionesGuardiaCivil()
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

    function detectarColisionesGuardiaCivil (){

        for (let i = arrayGuardiaCivil.length - 1; i >= 0; i--) {
            let cadaGuardia = arrayGuardiaCivil[i];
    
            if (
                espe.x < cadaGuardia.x + cadaGuardia.w &&
                espe.x + espe.w > cadaGuardia.x &&
                espe.y < cadaGuardia.y + cadaGuardia.h &&
                espe.y + espe.h > cadaGuardia.y
            ) {
                
                cadaGuardia.guardiaNode.remove()
                arrayGuardiaCivil.splice(i, 1)
                
                gameOverGuardiaCivil()

            }

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
                numColisionesAbuelos++

                arrayAbuelos.splice(i, 1)
                cadaAbuelo.abueloNode.remove()

                if(numColisionesAbuelos === 1){

                    vidaUnoNode.style.display = "none"
                }else if(numColisionesAbuelos === 2){
                    vidaUnoNode.style.display = "none"
                    vidaDosNode.style.display = "none"
                }
    
                if (numColisionesAbuelos >= 3) {

                    vidaTresNode.style.display = "none"
                    gameOverTresAbuelos();
                    numColisionesAbuelos = 0
                }
            }
        }
    }
       

    function gameOverTresAbuelos (){

        //limpieza de elementos
        clearInterval(intervaloJuego)
        clearInterval(intervaloAbuelos)
        clearInterval(intervaloGuardias)
        audio.pause()
        guardiaPillado.pause()
        muerteAyuso.play()
        muerteAyuso.volume = 1

        espe = null
        arrayAbuelos = []
        arrayGuardiaCivil = []
        pantallaJuegoNode.classList.add("pausa")
        pantallaJuegoNode.innerHTML = ""
        //contenedorJuegoNode=""

        contenedorJuegoNode.style.display = "none"
        pantallaFinal2Node.style.display = "none"
        pantallaFinalNode.style.display = "flex"
        vidaUnoNode.style.display = "flex"
        vidaTresNode.style.display = "flex"
        vidaDosNode.style.display = "flex"

        

    }

    function gameOverGuardiaCivil (){

        clearInterval(intervaloJuego)
        clearInterval(intervaloAbuelos)
        clearInterval(intervaloGuardias)
        espe = null
        arrayAbuelos = []
        arrayGuardiaCivil = []
        pantallaJuegoNode.classList.add("pausa")
        pantallaJuegoNode.innerHTML = ""
        //contenedorJuegoNode=""

        contenedorJuegoNode.style.display = "none"
        pantallaFinalNode.style.display = "none"
        pantallaFinal2Node.style.display = "flex"
        vidaUnoNode.style.display = "flex"
        vidaTresNode.style.display = "flex"
        vidaDosNode.style.display = "flex"
        
        muerteAyuso.pause()
        audio.pause()
        guardiaPillado.play()


    }

    function manejarTeclaPresionada(event){

            let teclaPulsada = false

            if (event.key === 'e') {
                
                teclaPulsada = true
                audio.volume = 0.4
                hablaEsperanzaTecla.volume = 0.8
                hablaEsperanzaTecla.play()     
            }
        
    }

    //LISTENERS

    botonStartNode.addEventListener("click", comenzarJuego)
    botonRestartNode.addEventListener("click", comenzarJuego)
    botonRestart2Node.addEventListener("click", comenzarJuego)
    document.addEventListener('keydown', manejarTeclaPresionada)

    //escuchar cuando termina el audio hablaEsperanza

    hablaEsperanzaTecla.addEventListener("ended", (event)=>{      
            audio.volume = 1


    })

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

    




















