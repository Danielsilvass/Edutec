function verifyToken() {
    const token = localStorage.getItem("token")

    if (!token) {
        window.location.href = "./login/login.html"
        return    
    }
    
}

verifyToken()