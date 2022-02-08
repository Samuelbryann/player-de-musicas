const musica1 = document.querySelector("#a1")

document.querySelector("#mk").addEventListener("click", reproduzir)

function reproduzir(){
    document.querySelector("#tale-init").style.display = "none"
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    document.querySelector("#mk").style.backgroundColor = "rgba(47, 255, 57, 0.89)"
    document.querySelector("#mk").style.color = "#000"
    document.querySelector("#mk").style.width = "100%"
    document.querySelector("#mk").style.borderRadius = "0px 10px 10px 0px"
    musica1.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"

}


document.querySelector("#pause").addEventListener("click", rausar)


function rausar(){
    document.querySelector("#mk").style.backgroundColor = "#15112d "
    document.querySelector("#mk").style.color = "rgb(245, 245, 245)"
    document.querySelector("#mk").style.width = "90%"
    document.querySelector("#mk").style.borderRadius = "0px 10px"
    musica1.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}






document.querySelector("#pt").addEventListener("click", reproduzir2)
const musica2 = document.querySelector(" #a2")
const image2 = document.querySelector("#image")



function reproduzir2(){
    document.querySelector("#tale-init").style.display = "none"
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    document.querySelector("#pt").style.backgroundColor = "rgba(47, 255, 57, 0.89)"
    document.querySelector("#pt").style.color = "#000"
    document.querySelector("#pt").style.width = "100%"
    document.querySelector("#pt").style.borderRadius = "0px 10px 10px 0px"
    image2.style.backgroundImage = "url(assests/dfideliz-d.jpg)"
    musica2.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"

}

document.querySelector("#pause").addEventListener("click", rausar2)


function rausar2(){
    document.querySelector("#pt").style.backgroundColor = "#15112d "
    document.querySelector("#pt").style.color = "rgb(245, 245, 245)"
    document.querySelector("#pt").style.width = "90%"
    document.querySelector("#pt").style.borderRadius = "0px 10px"
    musica2.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}






document.querySelector("#rd").addEventListener("click", reproduzir3)
const musica3 = document.querySelector(" #a3")
const image3 = document.querySelector("#image")


function reproduzir3(){
    document.querySelector("#tale-init").style.display = "none"
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"
    
    document.querySelector("#rd").style.backgroundColor = "rgba(47, 255, 57, 0.89)"
    document.querySelector("#rd").style.color = "#000"
    document.querySelector("#rd").style.width = "100%"
    document.querySelector("#rd").style.borderRadius = "0px 10px 10px 0px"
    image3.style.backgroundImage = "url(assests/rockin.png)"
    musica3.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"

}

document.querySelector("#pause").addEventListener("click", rausar3)


function rausar3(){
    document.querySelector("#rd").style.backgroundColor = "#15112d "
    document.querySelector("#rd").style.color = "rgb(245, 245, 245)"
    document.querySelector("#rd").style.width = "90%"
    document.querySelector("#rd").style.borderRadius = "0px 10px"
    musica3.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}







document.querySelector("#fl").addEventListener("click", reproduzir4)
const musica4 = document.querySelector(" #a4")
const image4 = document.querySelector("#image")


function reproduzir4(){
    document.querySelector("#fl").style.backgroundColor = "rgba(47, 255, 57, 0.89)"
    document.querySelector("#fl").style.color = "#000"
    document.querySelector("#fl").style.width = "100%"
    document.querySelector("#fl").style.borderRadius = "0px 10px 10px 0px"
    image4.style.backgroundImage = "url(assests/fl.jpg)"
    musica4.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"

}

document.querySelector("#pause").addEventListener("click", rausar4)


function rausar4(){
    document.querySelector("#fl").style.backgroundColor = "#15112d "
    document.querySelector("#fl").style.color = "rgb(245, 245, 245)"
    document.querySelector("#fl").style.width = "90%"
    document.querySelector("#fl").style.borderRadius = "0px 10px"
    musica4.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}





document.querySelector("#k").addEventListener("click", reproduzir5)
const musica5 = document.querySelector(" #a5")
const image5 = document.querySelector("#image")


function reproduzir5(){
    document.querySelector("#k").style.backgroundColor = "rgba(47, 255, 57, 0.89)"
    document.querySelector("#k").style.color = "#000"
    document.querySelector("#k").style.width = "100%"
    document.querySelector("#k").style.borderRadius = "0px 10px 10px 0px"

    image5.style.backgroundImage = "url(assests/rd.jpg)"
    musica5.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"

}

document.querySelector("#pause").addEventListener("click", rausar5)


function rausar5(){

    document.querySelector("#k").style.backgroundColor = "#15112d "
    document.querySelector("#k").style.color = "rgb(245, 245, 245)"
    document.querySelector("#k").style.width = "90%"
    document.querySelector("#k").style.borderRadius = "0px 10px"
    musica5.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"

    
}

