const returnToLoginScreen = () => {
    let targetURL = 'http://localhost:8080/bikerboost-1.0-SNAPSHOT/loginScreen.html';
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}

const createMeeting = () => {

}

const joinMeeting = () => {

}