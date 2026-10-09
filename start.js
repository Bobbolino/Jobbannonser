// Hämta formulären

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");





registerForm.addEventListener("submit", function(event) {

    // Hindrar sidan från att laddas om

    event.preventDefault();


    // Hämtar information från formuläret

    const name = document.getElementById("registerName").value;

    const email = document.getElementById("registerEmail").value;

    const password = document.getElementById("registerPassword").value;


    // Sparar informationen i localStorage

    localStorage.setItem("name", name);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);


    // Visar meddelande

    document.getElementById("registerMessage").textContent =
        "Registreringen lyckades! Du kan nu logga in.";

});



// LOGGA IN

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Hämtar det användaren skriver

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;


    // Hämtar sparad information

    const savedEmail = localStorage.getItem("email");

    const savedPassword = localStorage.getItem("password");


    // Kontrollerar om uppgifterna stämmer

    if (email === savedEmail && password === savedPassword) {

        document.getElementById("loginMessage").textContent =
            "Du är inloggad!";


        // Skickar användaren till jobbsidan

        setTimeout(function() {

            window.location.href = "annonser.html";

        }, 1000);

    }

    else {

        document.getElementById("loginMessage").textContent =
            "Fel e-post eller lösenord.";

    }

});