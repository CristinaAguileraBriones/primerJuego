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
        let frecuenciaAbuelos = 2000
        let frecuenciaGuardias = 3500
    

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

        let numColisionesAbuelos = 0
        arrayAbuelos.forEach(cadaAbuelo=>{

            if (

                espe.x < cadaAbuelo.x + cadaAbuelo.w &&
                espe.x + espe.w > cadaAbuelo.x &&
                espe.y < cadaAbuelo.y + cadaAbuelo.h &&
                espe.y + espe.h > cadaAbuelo.y

              ) {

                numColisionesAbuelos++
                if(numColisionesAbuelos===3){

                    gameOverTresAbuelos()
                }

                

              }

        })
       
    }

    function gameOverTresAbuelos (){



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




















