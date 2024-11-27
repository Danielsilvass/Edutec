export async function getname() {
    const token = localStorage.getItem("token")

    if(!token) {
        return
    }

    const response = await fetch("https://backend-edutec.vercel.app/getname", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    return response.name
}