// Parte responsavel por fazer as trocas de imagens do fundo de 4 em 4 segundos

let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#banner img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // trocar de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)