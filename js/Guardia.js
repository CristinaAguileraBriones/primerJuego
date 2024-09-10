class GuardiaCivil{

    constructor(){

        this.x = pantallaJuegoNode.offsetWidth
        this.y = 50
        this.w = 60
        this.h = 80

        this.speedMovementG = 2

        this.guardiaNode = document.createElement("img")
        this.guardiaNode.src = "./img/guardiaCivil(1).png"
        pantallaJuegoNode.append(this.guardiaNode)

        this.guardiaNode.style.width =  `${this.w}px`  //se interpola
        this.guardiaNode.style.position = "absolute"     
        this.guardiaNode.style.left = `${this.x}px`
        this.guardiaNode.style.top = `${this.y}px`

    }

    movimientoContinuoG() {

        this.x -= this.speedMovementG
        this.guardiaNode.style.left = `${this.x}px`


    }


    
}