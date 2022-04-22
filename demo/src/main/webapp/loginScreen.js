
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
            document.cookie = "Authorization="+_jwt;
            window.location.href = "/userScreen.html";
            document.getElementById("jwt").innerHTML = _jwt;
            return response.json()
        }).catch(err => console.log(err))
}

const registerUser = () => {
    let registrationData = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        username : document.getElementById("userRegister").value,
        email : document.getElementById("email").value,
        password : document.getElementById("pwdRegister").value
    }
    fetch('./api/register',
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(registrationData)
        }).then(response => {
        _jwt = response.headers.get("Authorization");
        document.getElementById("jwt").innerHTML = _jwt;
        return response.json()
    }).catch(err => console.log(err))

}

function getCookie() {
    let cname = "Authorization";
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}