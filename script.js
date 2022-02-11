// const musica1 = document.querySelector("#a1")
// document.querySelector("#mk").addEventListener("click", reproduzir)
// document.querySelector("#pause").addEventListener("click", pausar)
let audio;
let musicaAtual;
class Musica {
    constructor(audioId, elementId) {
        this.audioId = audioId;
        this.elementId = elementId;
    };
    reproduzir() {
        // Alterar o layout
        document.querySelector("#tale-init").style.display = "none"
        document.querySelector("#image").style.display = "flex"
        document.querySelector("#infos").style.display = "block"
        document.querySelector("#progresso").style.display = "flex"
        document.querySelector("#controls").style.display = "flex"
        document.querySelector("#play").style.display = "none"
        document.querySelector("#pause").style.display = "block"
        // Selecionar / não selecionar
        selecaoMusica(this.elementId);

        // Reproduzir o audio pelo id
        let audio = document.getElementById(`${this.audioId}`);
        audio.play();
    }
    pausar() {
        // Alterar o layout
        document.querySelector("#play").style.display = "block"
        document.querySelector("#pause").style.display = "none"
        // Parar o audio pelo id
        let audio = document.getElementById(`${this.audioId}`);
        audio.pause();
    }
}
// Add evento de click para todas as musicas
document.querySelectorAll('.itens-list-music').forEach((elemento) => {
    let elementId = elemento.id;
    let audioId = `audioId_${elementId}`;

    let musica = new Musica(audioId, elementId);
    elemento.addEventListener("click", () => {
        musica.reproduzir();
        musicaAtual = musica;
    });
});

// document.querySelectorAll(".btnPlayPause").forEach((btn) => {
//     btn.addEventListener("click", () => {
//         let btnPlay = document.getElementById(`play`);
//     let btnPause = document.getElementById(`pause`);
//     if (btnPlay.style.display == "block") {
//         document.querySelector("#play").style.display = "none"
//         document.querySelector("#pause").style.display = "block"
//     } else if (btnPause.style.display == "block") {
//         document.querySelector("#play").style.display = "block"
//         document.querySelector("#pause").style.display = "none"
//     }
//     })
// })
function alterarBtnPlayPause() {
    let btnPlay = document.getElementById(`play`);
    let btnPause = document.getElementById(`pause`);
    if (btnPlay.style.display == "block") {
        musicaAtual.pause();
    } else if (btnPause.style.display == "block") {
        musicaAtual.play();
    }
}

function selecaoMusica(elementId) {
    let musica = document.getElementById(`${elementId}`);
    let todasMusicas = document.querySelectorAll('.itens-list-music').forEach((elemento) => {
        if (elemento.classList.contains("itens-list-music-js")) {
            elemento.classList.remove("itens-list-music-js")
        }
    });
    musica.classList.add("itens-list-music-js")

}



// function reproduzir(idMusica) {
//     document.querySelector("#tale-init").style.display = "none"
//     document.querySelector("#image").style.display = "flex"
//     document.querySelector("#infos").style.display = "block"
//     document.querySelector("#progresso").style.display = "flex"
//     document.querySelector("#controls").style.display = "flex"
//     let musica = document.getElementById(`${idMusica}`);
//     console.log(`musica.id: ${musica.id}`);
//     // if (elemento.classList){
//     //     elemento.classList.add("itens-list-music-js")
//     // } else {
//     //     elemento.className += " itens-list-music-js";
//     // }
//     musica.play();
//     document.querySelector("#play").style.display = "none"
//     document.querySelector("#pause").style.display = "block"
// }



function pausar() {
    const elementoMusica = document.getElementById('mk');
    elementoMusica.classList.remove('itens-list-music-js');
    musica1.pause()
    document.querySelector("#play").style.display = "block"
    document.querySelector("#pause").style.display = "none"
}