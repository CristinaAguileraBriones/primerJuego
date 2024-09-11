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

        setTimeout(() => {
            // Obtener las dimensiones reales del elemento
            this.h = this.espeNode.offsetHeight;
            this.w = this.espeNode.offsetWidth;
        }, 0);
    }

        abajoPad(){
            
            if (this.y + this.espeNode.offsetHeight + this.speedMovement <= window.innerHeight) {
                this.y += this.speedMovement;
                this.espeNode.style.top = `${this.y}px`;
            }
            

        }

        arribaPad(){

            if (this.y - this.speedMovement >= 0) {
                this.y -= this.speedMovement;
                this.espeNode.style.top = `${this.y}px`

        }
    }


        acelerarPad(){

            if (this.x - this.speedMovement >= 0) {
                this.x -= this.speedMovement;
                this.espeNode.style.left = `${this.x}px`;
            }
        }


        atrasPad(){

            if (this.x + this.espeNode.offsetWidth + this.speedMovement <= window.innerWidth) {
                this.x += this.speedMovement;
                this.espeNode.style.left = `${this.x}px`;
            }
        }
    







}