const botaoJogarNovamente = document.querySelector("main button")

botaoJogarNovamente.addEventListener("click", jogarNovamente)

function inserirResultado() {
    const sectionPontuacao = document.querySelector(".tempo")
    const timer = localStorage.getItem("timer")
    const player = localStorage.getItem("player")
    const parabens = document.querySelector(".parabens")

    parabens.innerHTML =`
    Párabens ${player} você terminou o jogo da memória.
    `

    sectionPontuacao.innerHTML = `
            <h3> Seu tempo foi de: </h3>
            <h4>${timer}</h4>
            <p>Segundos</p>
        `
}

function jogarNovamente() {
    localStorage.removeItem("player")
    localStorage.removeItem("timer")

    window.location.href = "../jogo da memoria.html"
}

inserirResultado()