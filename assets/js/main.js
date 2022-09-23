
TweenMax.from('.home__header', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description', 1, {delay: .35, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('#image-1', 1.5, {delay: .45, opacity: 0, x: 400, ease: Expo.easeInOut})
TweenMax.from('#image-2', 1.5, {delay: .45, opacity: 0, x: -400, ease: Expo.easeInOut})
TweenMax.from('.home__footer', 1, {delay: .55, opacity: 0, y: 20, ease: Expo.easeInOut})

function newsletter () {
    let button = document.getElementById('button')
    let email = document.getElementById('email')
    console.log(email)

    if (ValidateEmail(email.value) == false)
        return

    if (button.disabled == true)
        return

    button.disabled = true

    button.classList.add("active")
    
    button.innerText = "Merci!"

    console.log('click')
    sendEmail(email)
    // button.style.display = "none"

}

function ValidateEmail(mail) {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (mail.match(validRegex)) {
        return true;
    } else {
        alert("Veuiller entrer une adresse mail valide.");
        return false;

    }
}

function sendEmail(email) {
    const serviceID = 'default_service';
    const templateID = 'template_4tt26d8';

    var templateParams = {
        email: email.value,
    };

    emailjs.send(serviceID, templateID, templateParams, 'dTysEWyKf3423Ml93')
    .then(() => {
        alert('Email envoyer avec succès!');
    }, (err) => {
        alert(JSON.stringify(err));
    });
}