class Espe {

    constructor(){

        this.x = 50
        this.y = 20
        this.h = 50
        this.w = 180

        this.speedMovement = 20
        this.isMovingUp = true
        this.isMovingDown = true

        //crear Espe en DOM
        this.espeNode = document.createElement("img")
        this.espeNode.src = "./img/prototipo-esperanza(1).png"
        pantallaJuegoNode.append(this.espeNode)
        
        //ajustar tamaño
        this.espeNode.style.width =  `${this.w}px`
        this.espeNode.style.position = "absolute"      //se interpola
        this.espeNode.style.left = `${this.x}px`
        this.espeNode.style.top = `${this.y}px`
    }

        abajoPad(){
        
            this.y+=this.speedMovement
            this.espeNode.style.top = `${this.y}px`
        

        }

        arribaPad(){

            this.y -= this.speedMovement
            this.espeNode.style.top = `${this.y}px`

        }
    







}