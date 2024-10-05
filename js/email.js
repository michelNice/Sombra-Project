
function emailSend(){
    let lastname = document.getElementById('lastname').valeu
    let name = document.getElementById('name').valeu
    let email = document.getElementById('email').valeu


    Email.send({
        Host : "smtp.gmail.com",
        Username : "kidsacy@gmail.com",
        Password : "58BA56FEDA9248DA9A5FAA56E5A4A7B637F4",
        To : 'kidsacy@gmail.com',
        From : 'kiddacy@gmail.com',
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}