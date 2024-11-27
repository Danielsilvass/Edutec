async function register() {
    const name = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const passwordConfirmation = document.querySelector("#confirm-password").value

    if(name === "" || email === "" || password === "" || passwordConfirmation === "") {
        alert("Preencha todas as informações!")
        return
    }

    if (password !== passwordConfirmation) {
        alert("As senhas não conferem. Digite novamente!")
        document.querySelector("#confirm-password").value = ""
        document.querySelector("#password").value = ""
        return
    }

    const user = {
        name,
        email,
        password
    }

    console.log(user)


    const response = await fetch("https://backend-edutec.vercel.app/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    alert(response.message)

    if(response.userExists) {
        window.location.reload()
        return
    }

    window.location.href = "../login/login.html"
}

const button = document.querySelector(".botao")

button.addEventListener("click", (event) => {
    event.preventDefault()
    register()
})