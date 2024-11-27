import { verifyToken } from "./utils/verify-token.js";
import { getname } from "./utils/get-name.js"
import { logout } from "./utils/logout.js";

const url = "./login/login.html"

verifyToken(url)
const name = await getname()

const nameP = document.querySelector(".user p")

nameP.innerText = `Usuário: ${name}`

logout()