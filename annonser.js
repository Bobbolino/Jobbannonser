// ========================================
// JOBBMATCH - ANNONSER
// Här finns data och funktioner för jobbannonser
// ========================================


// ----------------------------------------
// 1. Lista med alla jobbannonser
// Varje jobb har ett unikt id
// ----------------------------------------

const jobb = [
    {
        id: 1,
        titel: "IT Säkerhetsingenjör",
        företag: "SecureTech AB",
        ort: "Stockholm",
        kategori: "IT-Säkerhetsingenjör",
        beskrivning: "Vi söker en IT-säkerhetsingenjör som vill arbeta med att skydda system och nätverk."
    },
    {
        id: 2,
        titel: "IT-säkerhetsansvarig",
        företag: "Nordic Security AB",
        ort: "Uppsala",
        kategori: "IT-Säkerhetsansvarig",
        beskrivning: "Du ansvarar för företagets IT-säkerhet och hjälper till att utveckla säkra lösningar."
    },
    {
        id: 3,
        titel: "IT-säkerhetstekniker",
        företag: "Safe Network AB",
        ort: "Linköping",
        kategori: "IT-Säkerhetstekniker",
        beskrivning: "Vi söker en IT-säkerhetstekniker som vill arbeta med nätverk, säkerhet och felsökning."
    },
    {
        id: 4,
        titel: "IT & Supportttekniker",
        företag: "Support Solutions AB",
        ort: "Gotland",
        kategori: "IT-Supportttekniker",
        beskrivning: "Du arbetar med IT-support, installation och problemlösning för våra användare."
    },
    {
        id: 5,
        titel: "IT-Säkerhetsadministratör",
        företag: "Digital Security AB",
        ort: "Stockholm",
        kategori: "IT-Säkerhetsadministratör",
        beskrivning: "Vi söker en administratör som vill arbeta med behörigheter, säkerhet och IT-system."
    },
    {
        id: 6,
        titel: "IT-säkerhetsansvarig",
        företag: "Cyber Solutions AB",
        ort: "Linköping",
        kategori: "IT-säkerhetsansvarig",
        beskrivning: "Du kommer att arbeta med företagets säkerhetsrutiner och förebygga digitala hot."
    },
    {
        id: 7,
        titel: "IT-säkerhetstekniker",
        företag: "Secure Systems AB",
        ort: "Uppsala",
        kategori: "IT-säkerhetstekniker",
        beskrivning: "Arbetet innebär övervakning av system, felsökning och hantering av säkerhetsproblem."
    },
    {
        id: 8,
        titel: "IT Säkerhetsingenjör",
        företag: "Future Security AB",
        ort: "Gotland",
        kategori: "IT Säkerhetsingenjör",
        beskrivning: "Vi söker dig som vill utveckla säkra IT-lösningar och arbeta med modern cybersäkerhet."
    }
];


// ----------------------------------------
// 2. Hämtar element från HTML
// ----------------------------------------

const jobbLista = document.querySelector("#jobb-lista");
const ortFilter = document.querySelector("#ort");
const yrkeFilter = document.querySelector("#yrke");


// ----------------------------------------
// 3. Funktion som visar jobbannonser
// ----------------------------------------

function visaJobb(lista) {

    // Tömmer listan innan den ritas igen
    jobbLista.innerHTML = "";

    // Visar ett meddelande om inga jobb hittas
    if (lista.length === 0) {
        jobbLista.innerHTML = "<p>Inga jobb hittades.</p>";
        return;
    }

    // Skapar ett kort för varje jobb
    lista.forEach(function(jobbAnnons) {

        const artikel = document.createElement("article");

        artikel.innerHTML = `
            <h3>${jobbAnnons.titel}</h3>
            <p><strong>Företag:</strong> ${jobbAnnons.företag}</p>
            <p><strong>Ort:</strong> ${jobbAnnons.ort}</p>
            <p><strong>Yrkesområde:</strong> ${jobbAnnons.kategori}</p>

            <button class="detalj-knapp" data-id="${jobbAnnons.id}">
                Läs mer
            </button>

            <button class="spara-knapp" data-id="${jobbAnnons.id}">
                Spara
            </button>
        `;

        jobbLista.appendChild(artikel);
    });
}


// ----------------------------------------
// 4. Funktion som filtrerar jobb
// ----------------------------------------

function filtreraJobb() {

    const valdOrt = ortFilter.value;
    const valtYrke = yrkeFilter.value.trim();

    // Filter skapar en ny array
    // Originalarrayen "jobb" ändras inte
    const filtreradeJobb = jobb.filter(function(jobbAnnons) {

        const rättOrt =
            valdOrt === "" || jobbAnnons.ort === valdOrt;

        const rättYrke =
            valtYrke === "" || jobbAnnons.kategori === valtYrke;

        return rättOrt && rättYrke;
    });

    visaJobb(filtreradeJobb);
}


// ----------------------------------------
// 5. Lyssnar på filtren
// När användaren ändrar ett filter
// visas rätt jobb
// ----------------------------------------

ortFilter.addEventListener("change", filtreraJobb);
yrkeFilter.addEventListener("change", filtreraJobb);


// ----------------------------------------
// 6. Läser sparade jobb från localStorage
// Vi sparar bara jobbens id
// ----------------------------------------

let sparadeJobb = JSON.parse(
    localStorage.getItem("sparadeJobb") || "[]"
);


// ----------------------------------------
// 7. Funktion för att spara ett jobb
// ----------------------------------------

function sparaJobb(id) {

    // Kontrollerar att jobbet inte redan är sparat
    if (!sparadeJobb.includes(id)) {

        sparadeJobb.push(id);

        // Sparar arrayen i localStorage
        localStorage.setItem(
            "sparadeJobb",
            JSON.stringify(sparadeJobb)
        );

        visaSparadeJobb();
    }
}


// ----------------------------------------
// 8. Funktion som visar sparade jobb
// ----------------------------------------

function visaSparadeJobb() {

    const sparadeLista = document.querySelector("#spardeJobb");

    sparadeLista.innerHTML = "";

    // Tomt läge
    if (sparadeJobb.length === 0) {
        sparadeLista.innerHTML =
            "<p>Du har inga sparade jobb ännu.</p>";
        return;
    }

    // Hämtar rätt jobb genom deras id
    sparadeJobb.forEach(function(id) {

        const hittatJobb = jobb.find(function(jobbAnnons) {
            return jobbAnnons.id === id;
        });

        if (hittatJobb) {

            const rad = document.createElement("div");

            rad.innerHTML = `
                <p>
                    <strong>${hittatJobb.titel}</strong>
                    - ${hittatJobb.företag}
                </p>

                <button class="ta-bort-knapp" data-id="${hittatJobb.id}">
                    Ta bort
                </button>
            `;

            sparadeLista.appendChild(rad);
        }
    });
}


// ----------------------------------------
// 9. Tar bort ett sparat jobb
// ----------------------------------------

function taBortJobb(id) {

    // Tar bort jobbet med rätt id
    sparadeJobb = sparadeJobb.filter(function(sparatId) {
        return sparatId !== id;
    });

    // Uppdaterar localStorage
    localStorage.setItem(
        "sparadeJobb",
        JSON.stringify(sparadeJobb)
    );

    // Ritar om listan
    visaSparadeJobb();
}


// ----------------------------------------
// 10. Event delegation för jobb-listan
// Hanterar knappar som skapats med JavaScript
// ----------------------------------------

jobbLista.addEventListener("click", function(event) {

    // Spara jobb
    if (event.target.classList.contains("spara-knapp")) {

        const id = Number(event.target.dataset.id);

        sparaJobb(id);
    }

    // Visa detaljer
    if (event.target.classList.contains("detalj-knapp")) {

        const id = Number(event.target.dataset.id);

        visaDetaljer(id);
    }
});


// ----------------------------------------
// 11. Event delegation för sparade jobb
// ----------------------------------------

const sparadeLista = document.querySelector("#spardeJobb");

sparadeLista.addEventListener("click", function(event) {

    if (event.target.classList.contains("ta-bort-knapp")) {

        const id = Number(event.target.dataset.id);

        taBortJobb(id);
    }
});


// ----------------------------------------
// 12. Funktion som visar jobbets detaljer
// ----------------------------------------

function visaDetaljer(id) {

    // Hittar jobbet med rätt id
    const valtJobb = jobb.find(function(jobbAnnons) {
        return jobbAnnons.id === id;
    });

    if (!valtJobb) {
        return;
    }

    // Visar information om jobbet
    jobbLista.innerHTML = `
        <article>
            <h2>${valtJobb.titel}</h2>

            <p>
                <strong>Företag:</strong>
                ${valtJobb.företag}
            </p>

            <p>
                <strong>Ort:</strong>
                ${valtJobb.ort}
            </p>

            <p>
                <strong>Yrkesområde:</strong>
                ${valtJobb.kategori}
            </p>

            <p>${valtJobb.beskrivning}</p>

            <button id="tillbaka-knapp">
                Tillbaka till annonser
            </button>

            <button class="spara-knapp" data-id="${valtJobb.id}">
                Spara
            </button>
        </article>
    `;
}


// ----------------------------------------
// 13. Tillbaka från detaljvyn
// ----------------------------------------

jobbLista.addEventListener("click", function(event) {

    if (event.target.id === "tillbaka-knapp") {
        filtreraJobb();
    }
});


// ----------------------------------------
// 14. Visar innehållet när sidan startar
// ----------------------------------------

visaJobb(jobb);
visaSparadeJobb();