const jobs=[
    {
        id: 1,
        title: "Systemsäkerhetsingenjör inom Funchtional Safety",
        företag: "Agile Resources AB",
        location: "Linköping",
        kategori: "IT Säkerhetsingenjör",
        detalj : "Arbetar med systemsäkerhet och Functional Safety."
    },
    {
        id: 2,
        title: "Principal ciso consultant till mneemonic",
        företag: "Agile Resources AB",
        location: "Göteborg",
        kategori: "IT-säkerhetsanvarig",
        detalj: "Ansvarar för säkerhetsansvarig."
    },
    {
      id: 3,
        title: "Security Engineer, Corporate",
        företag: "lovable Labs Sweden AB",
        location: "Stockholm",
        kategori: "IT-säkerhetstekniker",
        detalj: "Säkerhetstekniker "   
    },
    {
    id: 4,
        title: "Technical Solutions Engineer",
        företag: "Academic Work Sweden AB",
        location: "Stockholm",
        kategori: "IT-Supporttekniker",
        detalj: "Avancerad teknisk support."   
    },
    {
    id: 5,
        title: "IT-supporttekniker till Quest consulting.",
        företag: "Quest consulting Sverige AB",
        location: "Stockholm",
        kategori: "IT-Supportttekniker",
        detalj: "Rollen som support-tekniker innebär primärt att ta emot och lösa incidenter och beställningar."  
    },
    {id: 6,
        title: "Säkerhetsskyddsspecialist till myndighet",
        företag: "Future People AB",
        location: "Stockholm",
        kategori: "IT-Säkerhetsadministratör",
        detalj: "en säkerhetsskyddsspecialist till vår kund i Sundbyberg."  
    },
    {
    id: 7,
        title: "Säkerhetsanalytiker",
        företag: "Uppsala Universitet",
        location: "Uppsala",
        kategori: "IT-säkerhetstekniker",
        detalj: "På Säkerhetsavdelningen har vi bred kompetens och ett brinnande intresse inom området"  
    },
    {
    id: 8,
        title: "Enhetschef It-arkitektur och it-säkerhet till Sveriges lantbruksuniversitet",
        företag: "lSveriges lantbruksuniversitet",
        location: "Uppsala",
        kategori: "IT-säkerhetsansvarig",
        detalj: "Som enhetschef har du personal- och budgetansvar för enheten och ingår i ledningsgruppen för IT-avdelningen."  
    }
]

const jobblista = document.querySelector("#jobb-lista"); //väljer id jobb lista för att lägg till 8 jobb 

function visajobb(alljobb){
    if (!jobblista){
        return;
    }
    jobblista.innerHTML=""; //lägg till innehåll i jobblista

    alljobb.forEach(jobb => { // allajob kalla för jobb och har samma innehåll
        jobblista.innerHTML += `
        <Selection class ="jobbobjekt">
            <h2>${jobb.title}</h2>
            <p>${jobb.företag}</p>
            <p>${jobb.location}</p>
            <p>${jobb.kategori}</p>
            <p>${jobb.detalj}</p>
           
            <button onclick="sparasjobb(${jobb.id})">Spara annons</button>
        </Selection>
        `;

    });
}
visajobb(jobs);// ser 8 jobb i webbsida

// filter ort och yrke för när man väljer ort och yrke , kommer ett jobb till resultat
const valjord = document.querySelector("#ort");
const valjyrke = document.querySelector("#yrke");

function jobbsfilter(){ //skapa jobbsfilter function
    const choosestad= valjord.value;
    const chooseyrke= valjyrke.value;

    const jobbsfilter= jobs.filter(jobb => {

        const passaort=
            choosestad ==="" || jobb.location === choosestad; //väljer location = stad
        const passayrke =
            chooseyrke ==="" || jobb.kategori === chooseyrke; // väljer yrke 

        return passaort && passayrke;  // väljer ort och yrke sent få title jobb som matcha 
});
    visajobb(jobbsfilter);
    
}
if(valjord && valjyrke){
valjord.addEventListener("change",jobbsfilter);
valjyrke.addEventListener("change", jobbsfilter);
}

//spara ansöker ilocalstorage

let sparasannons =[];
document.addEventListener("DOMContentLoaded",(e)=> {
    loadFormLocalStorage();
//localStorage.removeItem("sparasannons"); för rensar de jobb som har sparat
});

function loadFormLocalStorage(){ // html sidan är färdigladdad kör loadFormLocalStorage
    const LocalStorageId= localStorage.getItem("sparasannons")
    
    if(LocalStorageId){
        const jsDate = JSON.parse(LocalStorageId)// för text som java-array
        jsDate.forEach((id)=>{ // går igenom varje id
            sparasannons.push(id)// spara i sparasannons
    });
    }else {
        console.log("Ingen sparde annonser hittades")
    }
}
    function sparasjobb(id) {
    if (!sparasannons.includes(id)) {
        sparasannons.push(id);

        localStorage.setItem(
            "sparasannons",
            JSON.stringify(sparasannons)
        );

        console.log("Annonsen sparades!");
    } else {
        console.log("Annonsen är redan sparad!");
    }
}

// visa de sparade jobb
function visasparadejobb(){
    const sparatjobb= document.querySelector("#sparasjobb");//sparasjobb i spara.html

    if(!sparatjobb){
        return;
    }
    const sparadeId =JSON.parse(
        localStorage.getItem("sparasannons")
    ) || [];

    sparadeId.forEach(id => {
        const jobb = jobs.find(jobb => jobb.id === id);
        if(jobb){
            sparatjobb.innerHTML += `
            <section class ="jobbobjekt">
             <h2>${jobb.title}</h2>
             <p>${jobb.företag}</p>
             <p>${jobb.location}</p>
             <p>${jobb.kategori}</p>
             <p>${jobb.detalj}</p>
            </section>
            `;
        }
    });
}
visasparadejobb();