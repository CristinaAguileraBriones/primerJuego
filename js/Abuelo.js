class Abuelo{

    constructor(posicionY){

        this.x = pantallaJuegoNode.offsetWidth
        this.y = posicionY
        this.w = 35
        this.h = 80
        this.speedMovementA = 3

        this.abueloNode = document.createElement("img")
        this.abueloNode.src = "./img/abuelo.png"
        pantallaJuegoNode.append(this.abueloNode)

        this.abueloNode.style.width =  `${this.w}px`  //se interpola
        this.abueloNode.style.position = "absolute"     
        this.abueloNode.style.left = `${this.x}px`
        this.abueloNode.style.top = `${this.y}px`
    }

    movimientoContinuo() {

        this.x -= this.speedMovementA
        this.abueloNode.style.left = `${this.x}px`


    }
    
}