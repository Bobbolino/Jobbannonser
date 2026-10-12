

const loginForm = document.getElementById("loginForm");

const registerForm = document.getElementById("registerForm");





registerForm.addEventListener("submit", function(event) {

    

    event.preventDefault();


    

    const name = document.getElementById("registerName").value;

    const email = document.getElementById("registerEmail").value;

    const password = document.getElementById("registerPassword").value;


    

    localStorage.setItem("name", name);

    localStorage.setItem("email", email);

    localStorage.setItem("password", password);


    

    document.getElementById("registerMessage").textContent =
        "Registreringen lyckades! Du kan nu logga in.";

});





loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;


    

    const savedEmail = localStorage.getItem("email");

    const savedPassword = localStorage.getItem("password");


    

    if (email === savedEmail && password === savedPassword) {

        document.getElementById("loginMessage").textContent =
            "Du är inloggad!";


        

        setTimeout(function() {

            window.location.href = "annonser.html";

        }, 1000);

    }

    else {

        document.getElementById("loginMessage").textContent =
            "Fel e-post eller lösenord.";

    }

});