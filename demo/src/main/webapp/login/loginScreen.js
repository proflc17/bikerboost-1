const loginUser = () => {
    let username = document.getElementById("usrLogin").value
    let passwd = document.getElementById("pwdLogin").value
    let loginData = {
        username: username,
        password: passwd
    }
    fetch('./api/login',
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(loginData)
        })
        .then(response => {
            _jwt = response.headers.get("Authorization");
            document.getElementById("jwt").innerHTML = _jwt;
            return response.json()
        }).catch(err => console.log(err))
}