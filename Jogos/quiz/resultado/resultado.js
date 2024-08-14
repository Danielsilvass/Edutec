const botaoJogarNovamente = document.querySelector("main button")

botaoJogarNovamente.addEventListener("click", jogarNovamente)

function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontuacao")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML = `

            <strong>${pontos}</strong>

            <p>de 10</p>
        `
}

function jogarNovamente() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../quiz.html"
}

inserirResultado()