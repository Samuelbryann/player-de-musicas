const musica1 = document.querySelector("#a1")
document.querySelector("#mk").addEventListener("click", reproduzir)

function reproduzir(){
    document.querySelector("#tale-init").style.display = "none"              //musica 1
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"
    const elemento = document.getElementById("mk");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";
    musica1.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar)

function rausar(){
    const or = document.getElementById('mk');
    or.classList.remove('itens-list-music-js');
    musica1.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}

document.querySelector("#pt").addEventListener("click", reproduzir2)
const musica2 = document.querySelector(" #a2")
const image2 = document.querySelector("#image")

function reproduzir2(){
    document.querySelector("#tale-init").style.display = "none"              //musica 2
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"
    const elemento = document.getElementById("pt");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image2.style.backgroundImage = "url(assests/dfideliz-d.jpg)"
    musica2.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar2)
function rausar2(){
    const or2 = document.getElementById('pt');
    or2.classList.remove('itens-list-music-js');
    musica2.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}

document.querySelector("#rd").addEventListener("click", reproduzir3)
const musica3 = document.querySelector(" #a3")
const image3 = document.querySelector("#image")

function reproduzir3(){
    document.querySelector("#tale-init").style.display = "none"              //musica 3
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"
    
    const elemento = document.getElementById("rd");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image3.style.backgroundImage = "url(assests/rockin.png)"
    musica3.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar3)
function rausar3(){
    const or3 = document.getElementById('rd');
    or3.classList.remove('itens-list-music-js');
    musica3.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}

document.querySelector("#fl").addEventListener("click", reproduzir4)
const musica4 = document.querySelector(" #a4")
const image4 = document.querySelector("#image")

function reproduzir4(){
    document.querySelector("#tale-init").style.display = "none"              //musica 4
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    const elemento = document.getElementById("fl");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image4.style.backgroundImage = "url(assests/fl.jpg)"
    musica4.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar4)
function rausar4(){
    const or4 = document.getElementById('fl');
    or4.classList.remove('itens-list-music-js');
    musica4.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}

document.querySelector("#k").addEventListener("click", reproduzir5)
const musica5 = document.querySelector(" #a5")
const image5 = document.querySelector("#image")

function reproduzir5(){
    document.querySelector("#tale-init").style.display = "none"              //musica 5
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    const elemento = document.getElementById("k");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";
    image5.style.backgroundImage = "url(assests/rd.jpg)"
    musica5.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar5)


function rausar5(){
    const or5 = document.getElementById('k');
    or5.classList.remove('itens-list-music-js');
    musica5.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"    
}

document.querySelector("#lw").addEventListener("click", reproduzir6)
const musica6 = document.querySelector(" #a6")
const image6 = document.querySelector("#image")


function reproduzir6(){
    document.querySelector("#tale-init").style.display = "none"              //musica 6
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    const elemento = document.getElementById("lw");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image5.style.backgroundImage = "url(assests/wiu.jpg)"
    musica6.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar6)


function rausar6(){
    const or6 = document.getElementById('lw');
    or6.classList.remove('itens-list-music-js');
    musica6.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none" 
}

document.querySelector("#st").addEventListener("click", reproduzir7)
const musica7 = document.querySelector(" #a7")
const image7 = document.querySelector("#image")

function reproduzir7(){
    document.querySelector("#tale-init").style.display = "none"              //musica 7
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    const elemento = document.getElementById("st");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image7.style.backgroundImage = "url(assests/teto.jpg)"
    musica7.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar7)


function rausar7(){
    const or7 = document.getElementById('st');
    or7.classList.remove('itens-list-music-js');
    musica7.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none" 
}


document.querySelector("#dr").addEventListener("click", reproduzir8)
const musica8 = document.querySelector(" #a8")
const image8 = document.querySelector("#image")

function reproduzir8(){
    document.querySelector("#tale-init").style.display = "none"              //musica 8
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    const elemento = document.getElementById("dr");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image8.style.backgroundImage = "url(assests/rr1.jpg)"
    musica8.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar8)


function rausar8(){
    const or8 = document.getElementById('dr');
    or8.classList.remove('itens-list-music-js');
    musica8.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none" 
}



document.querySelector("#er").addEventListener("click", reproduzir9)        //musica 9
const musica9 = document.querySelector(" #a9")
const image9 = document.querySelector("#image")


function reproduzir9(){
    document.querySelector("#tale-init").style.display = "none"
    document.querySelector("#image").style.display = "flex"
    document.querySelector("#infos").style.display = "block"
    document.querySelector("#progresso").style.display = "flex"
    document.querySelector("#controls").style.display = "flex"

    const elemento = document.getElementById("er");
    if (elemento.classList) elemento.classList.add("itens-list-music-js");
    else elemento.className += " itens-list-music-js";

    image9.style.backgroundImage = "url(assests/rr1.jpg)"
    musica9.play()
    document.querySelector("#play").style.display = "none"
    document.querySelector("#pause").style.display = "block"
}

document.querySelector("#pause").addEventListener("click", rausar9)

function rausar9(){
    const or9 = document.getElementById('er');
    or9.classList.remove('itens-list-music-js');
    musica9.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none" 
}
