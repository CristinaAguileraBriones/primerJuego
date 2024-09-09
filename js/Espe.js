class Espe {

    constructor(){

        this.x = 50
        this.y = 20
        this.h = 35
        this.w = 80

        this.speedMovement = 20

        //crear Espe en DOM
        this.espeNode = document.createElement("img")
        this.espeNode.src = "./img/cochePrueba.png"
        pantallaJuegoNode.append(this.espeNode)
        
        //ajustar tamaño
        this.espeNode.style.width =  `${this.w}px`
        this.espeNode.style.position = "absolute"      //se interpola
        this.espeNode.style.left = `${this.x}px`
        this.espeNode.style.top = `${this.y}px`
    }

        abajoPad(){
            
            this.y += this.speedMovement
             this.espeNode.style.top = `${this.y}px`

        }

        arribaPad(){

            this.y -= this.speedMovement
            this.espeNode.style.top = `${this.y}px`


        }
    







}